import { useState } from "react";
import styled from "styled-components";
import Header1 from "./Header1";
import BlueButton from "./BlueButton";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
const Container = styled.div`
  padding: 30px 20px;
`;

const QuestionTitleInput = styled.input`
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 20px;
  color: #fff;
`;

const QuestionBodyTextArea = styled.textarea`
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  min-height: 200px;
  margin-bottom: 20px;
  color: #fff;
  font-family: inherit;
`;

const PreviewArea = styled.div`
  padding: 10px 20px;
  background-color: #444;
  border-raidus: 5px;
  margin-bottom: 20px;

`;

const FileInput = styled.input`
  display: none;
`;

const UploadButton = styled.label`
  display: inline-block;
  background: #444;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  text-align: center;
  &:hover {
    background: #555;
  }
`;

const ScreenshotPreview = styled.img`
  display: block;
  max-width: 100%;
  max-height: 200px;
  margin-top: 10px;
  border-radius: 5px;
`;

export default function AskPage() {
  const [questionBody, setQuestionBody] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setScreenshot(reader.result); // Convert file to base64 string for preview
      };
      reader.readAsDataURL(file);
    }
  };



const [screenshot, setScreenshot] = useState(null)  
const [questionTitle, setQuestionTitle] = useState(null)

  return (
    <Container>
      <Header1 style={{ marginBottom: "20px" }}>Ask a Question</Header1>
      <QuestionTitleInput type="text"
                        value={questionTitle}
                        onChange={e => setQuestionTitle(e.target.value)}
                        placeholder="Title of your question" />
      <QuestionBodyTextArea 
                        onChange={ e=> setQuestionBody(e.target.value)}
                        placeholder="Type your description of your question here" />

      
      <UploadButton htmlFor="screenshotUpload">Upload Screenshot</UploadButton>
      <FileInput type="file" id="screenshotUpload" accept="image/*" onChange={handleFileChange} />

      
      {screenshot && <ScreenshotPreview src={screenshot} alt="Screenshot Preview" />}
      <BlueButton>Post your Question</BlueButton>
      <PreviewArea>
        <ReactMarkdown remarkPlugins={[gfm]} children={questionBody}/>
      </PreviewArea>
    </Container>
  );
}
