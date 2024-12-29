import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export async function generatePDF(content: string, documentType: string): Promise<void> {
  // Create a temporary div to render the content
  const element = document.createElement('div');
  element.innerHTML = content;
  element.style.width = '800px';
  element.style.padding = '40px';
  document.body.appendChild(element);

  try {
    // Convert the div to canvas
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4'
    });

    // Add title
    pdf.setFontSize(20);
    pdf.text(documentType.toUpperCase(), 40, 40);

    // Add content as image
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 60, pdfWidth, pdfHeight);

    // Download the PDF
    pdf.save(`${documentType.toLowerCase()}-${Date.now()}.pdf`);
  } finally {
    // Clean up
    document.body.removeChild(element);
  }
}