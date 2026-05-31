import { ApiResponse } from './common';

export type FleetPartnerApplicationFormValues = {
  companyName: string;
  registrationNumber: string;
  yearsInOperation: string;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  contactName: string;
  title: string;
  emailAddress: string;
  phoneNumber: string;
  alternatePhoneNumber: string;
  totalVehicles: string;
  averageVehicleAge: string;
  wheelchairAccessibleCount: string;
  stretcherAccessibleCount: string;
  ambulatoryVehicles: string;
  insuranceProvider: string;
  policyNumber: string;
  liabilityCoverageAmount: string;
  currentServiceAreas: string;
  currentHealthcareContracts: string;
  additionalInformation: string;
  confirmAccuracy: boolean;
  confirmStandards: boolean;
  consentContact: boolean;
};

export type FleetPartnerApplicationDocument = {
  key: string;
  file: File;
};

export type ApplyFleetPartnerApplicationInput =
  FleetPartnerApplicationFormValues & {
    documents: FleetPartnerApplicationDocument[];
  };

export type ApiApplyFleetPartnerApplicationPayload = {
  company_name: string;
  business_registration_number: string;
  years_in_operation: number;
  street_address: string;
  city: string;
  province: string;
  postal_code: string;
  contact_person: string;
  contact_title: string;
  email: string;
  phone: string;
  alternate_phone: string;
  fleet_size: number;
  average_vehicle_age: number;
  wheelchair_accessible_count: number;
  stretcher_accessible_count: number;
  ambulatory_vehicle_count: number;
  insurance_provider: string;
  policy_number: string;
  liability_coverage_amount: string;
  service_areas: string;
  healthcare_contracts: string;
  additional_info: string;
  consent_accuracy: boolean;
  consent_compliance: boolean;
  consent_contact: boolean;
  certificate_of_insurance?: File | null;
  business_registration_doc?: File | null;
  vehicle_registration_doc?: File | null;
  driver_certifications_doc?: File | null;
  safety_compliance_doc?: File | null;
};

export type FleetPartnerApplicationData = {
  id: string;
  company_name: string;
  email: string;
  status: string;
  created_at: string;
  message: string;
};

export type ApiApplyFleetPartnerApplicationResponse =
  ApiResponse<FleetPartnerApplicationData>;
