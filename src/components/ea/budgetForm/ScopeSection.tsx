
import React, { useState } from 'react';
import RichTextEditor from './RichTextEditor';

interface ScopeSectionProps {
  id: string;
  initialContent?: string;
  onContentChange: (content: string) => void;
  onTitleChange: (title: string) => void;
  sectionNumber: number;
}

const ScopeSection: React.FC<ScopeSectionProps> = ({ initialContent = '', onContentChange, onTitleChange, sectionNumber }) => {
  const [sectionTitle, setSectionTitle] = useState('');
  const [editorContent, setEditorContent] = useState(initialContent);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSectionTitle(e.target.value);
    onTitleChange(e.target.value);
  };

  const handleEditorContentChange = (content: string) => {
    setEditorContent(content);
    onContentChange(content);
  };

  return (
    <section className="editor-section">
      <div className="title-container">
        <span className="section-display-title">{sectionTitle ? `1.${sectionNumber} ` : ''}</span>
        <input
          type="text"
          className="section-title-input"
          placeholder="Adicionar título"
          value={sectionTitle}
          onChange={handleTitleChange}
        />
      </div>
      <RichTextEditor initialContent={editorContent} onContentChange={handleEditorContentChange} />
    </section>
  );
};

export default ScopeSection;
