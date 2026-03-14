import WindowWrapper from '#hoc/WindowWrapper'
import { WindowControls } from '#components'
import React from 'react'
import { Download, ExternalLink } from 'lucide-react'; 
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const path = "files/Resume.pdf";

const Resume = () => {
  return (
    <div className="flex flex-col w-full h-200 overflow-hidden">

      <div id="window-header">
        <div className="flex items-center gap-2">
          <WindowControls target="resume" />
          <h2 className="ml-2">Resume.pdf</h2>
        </div>

        <div className="flex items-center gap-4">
          {/* NEW: Open in New Tab Link */}
          <a 
            href={path}
            target="_blank" 
            rel="noreferrer" 
            className='cursor-pointer hover:opacity-70'
            title="Open in New Tab"
          >
            <ExternalLink className='icon'/>
          </a>


        <a href={path} download className='cursor-pointer'
          title="Download Resume">
            <Download className='icon'/>
        </a>
        </div>
        </div>
        
      <div className='flex-1 overflow-y-auto p-4 flex justify-center custom-scrollbar'>
        <Document file={path}>
        <Page
          pageNumber={1}
          renderTextLayer
          renderAnnotationLayer 
          
          />
          
      </Document>

      </div>
        
    </div>
  )
}
const ResumeWindow = WindowWrapper(Resume, 'resume');
export default ResumeWindow;