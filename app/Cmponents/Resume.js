import React from 'react';
import { Document, Page } from 'react-pdf';

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <Document file="/Resume1.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;

