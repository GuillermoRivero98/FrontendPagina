import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'pdfjs-dist';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewerModal = ({ pdfUrl, show, handleClose }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                
                <div className="pdf-viewer">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                        <Viewer fileUrl={pdfUrl} />
                    </Worker>
                </div>
            </div>
        </div>
    );
};

export default PdfViewerModal;
