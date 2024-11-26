import { useState } from "react";
import { storage } from "../api/firebase";

const ImageUploader = () => {
  const [file, setFile] = useState(null); // 로컬 파일 경로
  const [url, setUrl] = useState(""); // 업로드 후 파이어베이스 URL 경로

  // 업로드할 파일 선택
  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]); // 파일 여러개 첨부하면 인덱스 번호로 선택
  };

  // 업로드 버튼 클릭
  const handleUploadClick = () => {
    if (!file) {
      alert("파일을 먼저 선택하세요."); // alert창 원래는 안쓰고 modal 박스로 커스터마이징 함.
      return;
    }
    // 아래 코드는 firebase 가이드에 나와있음
    const storageRef = storage.ref(); // Firebase Storage 참조
    const fileRef = storageRef.child(file.name);
    fileRef
      .put(file) // 파일 업로드
      .then(() => {
        // 이게 await 부분이라고 보면 됨(비동기). 가이드 문서에 이렇게 돼있어서 그냥 이렇게 둠
        console.log("파일 업로드 성공");
        return fileRef.getDownloadURL(); // 업로드 된 파일의 URL을 가져옴
      })
      .then((downloadUrl) => {
        console.log("저장된 경로 : ", downloadUrl);
        setUrl(downloadUrl);
      })
      .catch((error) => {
        console.log("업로드 중 에러 발생 : ", error);
      });
  };

  return (
    <>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUploadClick}>파일 업로드</button>
      {url && <img src={url} alt="파일 없음" />}
    </>
  );
};

export default ImageUploader;
