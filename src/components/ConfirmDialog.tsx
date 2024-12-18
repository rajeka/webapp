interface ConfirmDialogProps {
  show: boolean;

  onCancel: () => void;

  onConfirm: () => void;

  title: string;

  message: string;
}
const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  show,
  onCancel,
  onConfirm,
  title,
  message,
}) => {
  if (!show) {
    return null;
  }
  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog"></div>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button
            className="btn-close"
            type="button"
            aria-label="Close"
            onClick={onCancel}
          ></button>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-sm btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
