import React from 'react';

const TestFile = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileSizeInBytes = file.size;
      const fileSizeInKilobytes = fileSizeInBytes / 1024;
      const fileSizeInMegabytes = fileSizeInKilobytes / 1024;

      console.log('파일 이름:', file.name);
      console.log('파일 크기 (bytes):', fileSizeInBytes);
      console.log('파일 크기 (KB):', fileSizeInKilobytes);
      console.log('파일 크기 (MB):', fileSizeInMegabytes);
    } else {
      console.log('파일이 선택되지 않았습니다.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default TestFile;