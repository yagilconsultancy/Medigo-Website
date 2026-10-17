import { toast } from 'sonner';
import { useApplyFleetPartnerApplication } from '../../mutation';
import {
  ApiApplyFleetPartnerApplicationPayload,
  ApplyFleetPartnerApplicationInput,
} from '../../../../types';
import { extractResponseErrors, tryExecute } from '../../../../utils';

const toNumber = (value: string) => Number(value.trim());

// The server explains what went wrong in `message` (and `details` for form
// field problems). Show that, so the applicant knows what to fix.
const getSubmitErrorMessage = (error: any): string => {
  const status = error?.response?.status;
  const data = error?.response?.data;

  if (status === 413) {
    return 'Your documents are too large to send together. Each file must be 10 MB or smaller and all files together 18 MB or smaller.';
  }

  if (data && typeof data === 'object') {
    if (Array.isArray(data.details) && data.details.length > 0) {
      const fields = data.details
        .map((item: any) =>
          Array.isArray(item?.loc) ? String(item.loc[item.loc.length - 1]) : ''
        )
        .filter(Boolean);
      if (fields.length > 0) {
        return `Please check these fields and try again: ${fields
          .map((field: string) => field.replace(/_/g, ' '))
          .join(', ')}.`;
      }
    }

    if (typeof data.message === 'string' && data.message.trim()) {
      return data.message;
    }

    return extractResponseErrors(data) as string;
  }

  return 'We could not submit your application. Please check your connection and try again.';
};

const documentFieldMap: Record<
  string,
  keyof ApiApplyFleetPartnerApplicationPayload
> = {
  'Certificate of insurance (current)': 'certificate_of_insurance',
  'Business registration documents': 'business_registration_doc',
  'Vehicle registration and inspection certificates':
    'vehicle_registration_doc',
  'Driver certifications and abstracts': 'driver_certifications_doc',
  'Safety and compliance records': 'safety_compliance_doc',
};

const mapDocumentsToPayload = (
  documents: ApplyFleetPartnerApplicationInput['documents']
) => {
  return documents.reduce<
    Pick<
      ApiApplyFleetPartnerApplicationPayload,
      | 'certificate_of_insurance'
      | 'business_registration_doc'
      | 'vehicle_registration_doc'
      | 'driver_certifications_doc'
      | 'safety_compliance_doc'
    >
  >((acc, document) => {
    const fieldName = documentFieldMap[document.key];

    if (fieldName) {
      acc[fieldName] = document.file;
    }

    return acc;
  }, {});
};

const mapToPayload = (
  input: ApplyFleetPartnerApplicationInput
): ApiApplyFleetPartnerApplicationPayload => ({
  company_name: input.companyName.trim(),
  business_registration_number: input.registrationNumber.trim(),
  years_in_operation: toNumber(input.yearsInOperation),
  street_address: input.streetAddress.trim(),
  city: input.city.trim(),
  province: input.province.trim(),
  postal_code: input.postalCode.trim(),
  contact_person: input.contactName.trim(),
  contact_title: input.title.trim(),
  email: input.emailAddress.trim(),
  phone: input.phoneNumber.trim(),
  alternate_phone: input.alternatePhoneNumber.trim(),
  fleet_size: toNumber(input.totalVehicles),
  average_vehicle_age: toNumber(input.averageVehicleAge),
  wheelchair_accessible_count: toNumber(input.wheelchairAccessibleCount),
  stretcher_accessible_count: toNumber(input.stretcherAccessibleCount),
  ambulatory_vehicle_count: toNumber(input.ambulatoryVehicles),
  insurance_provider: input.insuranceProvider.trim(),
  policy_number: input.policyNumber.trim(),
  liability_coverage_amount: input.liabilityCoverageAmount.trim(),
  service_areas: input.currentServiceAreas.trim(),
  healthcare_contracts: input.currentHealthcareContracts.trim(),
  additional_info: input.additionalInformation.trim(),
  consent_accuracy: input.confirmAccuracy,
  consent_compliance: input.confirmStandards,
  consent_contact: input.consentContact,
  ...mapDocumentsToPayload(input.documents),
});

export const useFleetApplicationApi = () => {
  const doApplyFleetPartnerApplication = useApplyFleetPartnerApplication();

  const submitApplication = async (
    input: ApplyFleetPartnerApplicationInput
  ): Promise<boolean> => {
    let success = false;

    await tryExecute(
      () => doApplyFleetPartnerApplication.mutateAsync(mapToPayload(input)),
      async (response) => {
        const responseData = response.data;

        if (responseData.success) {
          toast.success(
            responseData.data?.message ||
              responseData.message ||
              'Fleet partner application submitted successfully'
          );
          success = true;
          return;
        }

        toast.error(extractResponseErrors(responseData));
      },
      async (error) => {
        toast.error(getSubmitErrorMessage(error));
      }
    );

    return success;
  };

  return {
    submitApplication,
    isSubmitting: doApplyFleetPartnerApplication.isPending,
  };
};
