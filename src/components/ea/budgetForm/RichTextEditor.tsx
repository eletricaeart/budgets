
import React, { useState, useRef, useEffect, useCallback } from 'react';
import './RichTextEditor.css';

interface RichTextEditorProps {
  initialContent?: string;
  onContentChange: (content: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ initialContent = '', onContentChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  // No need for 'content' state here, as contentEditable manages its own DOM

  // Effect to initialize the DOM when initialContent changes externally
  useEffect(() => {
    if( editorRef.current && editorRef.current.innerHTML !== initialContent ) {
      editorRef.current.innerHTML = initialContent;
    }
  }, [initialContent]);

  // Handle input changes from the contenteditable div
  const handleInput = useCallback(() => {
    if (editorRef.current) {
      onContentChange(editorRef.current.innerHTML);
    }
  }, [onContentChange]);

  // Generic command execution
  const execCmd = useCallback((command: string, value: string | null = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput(); // Update state after command
  }, [handleInput]);

  // Helper function to insert a styled image
  const insertStyledImage = useCallback((url: string) => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const img = document.createElement('img');
    img.src = url;
    img.style.maxWidth = '90%';
    img.style.margin = '0 auto';
    img.style.display = 'block';

    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(img);

    // Move cursor after the image
    const newRange = document.createRange();
    newRange.setStartAfter(img);
    newRange.collapse(true);
    selection.removeAllRanges();
    selection.addRange(newRange);

    editorRef.current?.focus();
    handleInput(); // Update state after command
  }, [handleInput]);

  // Event listener for toolbar buttons
  const handleToolbarClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('button');
    if (!target || !target.dataset.command) return;

    const command = target.dataset.command;

    if (command === 'createLink') {
      const url = prompt('Enter the link URL:');
      if (url) {
        execCmd(command, url);
      }
    } else if (command === 'insertImageFromUrl') {
      const url = prompt('Enter image URL:');
      if (url) {
        insertStyledImage(url);
      }
    } else if (command === 'uploadImage') {
      // This would typically trigger a file input click
      alert('Image upload functionality needs to be implemented with a file input.');
    } else if (command === 'addText') {
      execCmd('formatBlock', 'p');
    } else {
      execCmd(command);
    }
  }, [execCmd, insertStyledImage]);

  // Event listener for color inputs
  const handleColorChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const command = e.target.dataset.command;
    if (command) {
      execCmd(command, e.target.value);
    }
  }, [execCmd]);

  // Function to update the toolbar button states based on the current selection
  const updateToolbar = useCallback(() => {
    // This is a simplified version. A full RTE would track active styles more robustly.
    // For now, we just ensure the editor has focus.
    if (editorRef.current && editorRef.current === document.activeElement) {
      // You could add logic here to check document.queryCommandState for active commands
      // and update button classes, but it's complex without a library.
    }
  }, []);

  // Listen for selection changes to update toolbar (simplified)
  useEffect(() => {
    const handleSelectionChange = () => {
      if (editorRef.current && editorRef.current.contains(window.getSelection()?.anchorNode || null)) {
        updateToolbar();
      }
    };
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [updateToolbar]);

  return (
    <div className="rich-text-editor-container">
      <div className="toolbar" onClick={handleToolbarClick}>
        <button data-command="bold" style={{ background: '#27f !important' }}><b>B</b></button>
        <button data-command="italic"><i>I</i></button>
        <button data-command="underline"><u>U</u></button>
        <button data-command="insertOrderedList">OL</button>
        <button data-command="insertUnorderedList">UL</button>
        <button data-command="addText">Texto</button>
        <button data-command="justifyLeft">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
          </svg>
        </button>
        <button data-command="justifyCenter">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-center" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
          </svg>
        </button>
        <button data-command="justifyRight">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
          </svg>
        </button>
        <button data-command="createLink">Link</button>
        <label htmlFor="foreColor">Cor</label>
        <input type="color" data-command="foreColor" onChange={handleColorChange} />
        <label htmlFor="backColor">Marcador</label>
        <input type="color" data-command="backColor" onChange={handleColorChange} />
        <button data-command="insertImageFromUrl">Imagem URL</button>
        <button data-command="uploadImage">Imagem Upload</button>
      </div>
      <div
        ref={editorRef}
        className="editor"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onInput={handleInput}
      ></div>
    </div>
  );
};

export default RichTextEditor;
