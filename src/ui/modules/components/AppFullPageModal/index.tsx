import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Box,
  Dialog,
  DialogProps,
  IconButton,
  Slide,
  SxProps,
  Theme,
} from '@mui/material';
import {
  forwardRef,
  PropsWithChildren,
  ReactElement,
  Ref,
  SyntheticEvent,
} from 'react';
import { TransitionProps } from '@mui/material/transitions';

export type AppFullPageModalProps = PropsWithChildren<
  Omit<
    DialogProps,
    'onClose' | 'open' | 'fullScreen' | 'slots' | 'slotProps'
  > & {
    open: boolean;
    onClose: () => void;
    showCloseButton?: boolean;
    paperSx?: SxProps<Theme>;
  }
>;

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement },
  ref: Ref<unknown>
) {
  return (
    <Slide direction="up" ref={ref} {...props}>
      {props.children}
    </Slide>
  );
});

export const AppFullPageModal = ({
  children,
  onClose,
  showCloseButton = true,
  paperSx,
  ...rest
}: AppFullPageModalProps) => {
  const handleDialogClose = (
    _event: SyntheticEvent,
    _reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    onClose();
  };

  return (
    <Dialog
      {...rest}
      fullScreen
      keepMounted={false}
      onClose={handleDialogClose}
      scroll="paper"
      slots={{
        transition: Transition,
      }}
      slotProps={{
        paper: {
          sx: {
            position: 'relative',
            backgroundColor: '#FFFFFF',
            overflowY: 'auto',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch',
            ...paperSx,
          },
        },
      }}
    >
      {showCloseButton ? (
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 16, sm: 20, md: 24 },
            right: { xs: 16, sm: 20, md: 24 },
            zIndex: 1,
          }}
        >
          <IconButton
            aria-label="Close modal"
            onClick={onClose}
            sx={{
              color: 'text.primary',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0px 4px 16px rgba(15, 23, 42, 0.08)',
              '&:hover': {
                backgroundColor: '#FFFFFF',
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      ) : null}

      {children}
    </Dialog>
  );
};
