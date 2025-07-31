import React from 'react';
import { Button } from "@/components/ui/button";
import { FileDown, FileText } from "lucide-react";

interface ExportButtonsProps {
  reportTitle: string;
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ reportTitle }) => {
  const handlePDFExport = () => {
    // Apply print styles and trigger browser print dialog
    const printStyles = `
      <style>
        @media print {
          body { font-size: 11pt; line-height: 1.3; }
          .print\\:hidden { display: none !important; }
          .page-break-before { page-break-before: always; }
          .page-break-after { page-break-after: always; }
          .page-break-inside-avoid { page-break-inside: avoid; }
          @page { margin: 0.75in; size: A4; }
          .text-3xl { font-size: 18pt; }
          .text-2xl { font-size: 16pt; }
          .text-xl { font-size: 14pt; }
          .text-lg { font-size: 12pt; }
          table { font-size: 10pt; }
          .space-y-6 > * + * { margin-top: 1rem; }
          .space-y-4 > * + * { margin-top: 0.75rem; }
          .space-y-3 > * + * { margin-top: 0.5rem; }
          .grid { display: block; }
          .grid > * { margin-bottom: 0.5rem; }
          .h-64 { height: 4in; }
        }
      </style>
    `;
    
    const head = document.head;
    const styleElement = document.createElement('style');
    styleElement.innerHTML = printStyles;
    head.appendChild(styleElement);
    
    window.print();
    
    // Remove styles after printing
    setTimeout(() => {
      head.removeChild(styleElement);
    }, 1000);
  };

  const handleGoogleDocsExport = () => {
    // Create a formatted document for Google Docs
    const content = document.querySelector('.max-w-4xl')?.cloneNode(true) as HTMLElement;
    if (!content) return;

    // Remove branding controls and non-exportable elements
    const elementsToRemove = content.querySelectorAll('.print\\:hidden, .bg-card, .border-b');
    elementsToRemove.forEach(el => el.remove());

    // Format for Google Docs
    const formattedHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${reportTitle}</title>
        <style>
          body { font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.4; max-width: 8.5in; margin: 0 auto; padding: 1in; }
          h1 { font-size: 18pt; font-weight: bold; text-align: center; margin-bottom: 1em; }
          h2 { font-size: 14pt; font-weight: bold; margin: 1em 0 0.5em 0; }
          h3 { font-size: 12pt; font-weight: bold; margin: 0.8em 0 0.4em 0; }
          table { width: 100%; border-collapse: collapse; margin: 1em 0; font-size: 10pt; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f5f5f5; font-weight: bold; }
          .text-center { text-align: center; }
          .text-right { text-align: right; }
          .font-bold { font-weight: bold; }
          .text-green-600 { color: #059669; }
          .text-red-600 { color: #dc2626; }
          .text-orange-600 { color: #ea580c; }
          .text-yellow-600 { color: #d97706; }
          .bg-green-50, .bg-red-50, .bg-orange-50, .bg-yellow-50, .bg-blue-50, .bg-purple-50 { 
            background-color: #f9f9f9; padding: 8px; margin: 4px 0; border-radius: 4px; 
          }
          .grid { display: block; }
          .space-y-4 > * + * { margin-top: 1em; }
          .space-y-3 > * + * { margin-top: 0.75em; }
          .rounded-lg, .rounded { border-radius: 4px; border: 1px solid #e5e5e5; padding: 8px; }
        </style>
      </head>
      <body>
        ${content.innerHTML}
      </body>
      </html>
    `;

    // Create and download the file
    const blob = new Blob([formattedHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${reportTitle.replace(/[^a-zA-Z0-9]/g, '_')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2 print:hidden">
      <Button onClick={handlePDFExport} variant="outline" size="sm">
        <FileDown className="w-4 h-4 mr-2" />
        Export PDF
      </Button>
      <Button onClick={handleGoogleDocsExport} variant="outline" size="sm">
        <FileText className="w-4 h-4 mr-2" />
        Export to Google Docs
      </Button>
    </div>
  );
};

export default ExportButtons;