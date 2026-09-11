import { useEffect } from 'react';

const RESUME_URL = '/assets/pdf/Ashutosh_Dhanawade_UIUX_Resume_Updated_In_Sept.pdf';

export default function ResumeModal({ open, onClose }) {
    useEffect(() => {
        if (!open) return undefined;
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="modal-overlay active" onClick={onClose}>
            <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
                <div className="resume-modal-header">
                    <h3>Resume</h3>
                    <div className="resume-modal-actions">
                        <a href={RESUME_URL} download className="btn btn-primary">Download</a>
                        <span className="modal-close" onClick={onClose}>&times;</span>
                    </div>
                </div>
                <div className="resume-modal-body">
                    <iframe
                        src={RESUME_URL}
                        title="Resume"
                        loading="lazy"
                        allow="fullscreen"
                    />
                </div>
            </div>
        </div>
    );
}