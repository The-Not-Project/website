import {
  FileInput,
  FileInputLabel,
  FormLabel,
} from '@/app/admin/components/shared/Form';
import { useState } from 'react';
import {
  FaUpload as IconUpload,
  FaCheck as IconSuccess,
} from 'react-icons/fa6';

export default function FileInputContainer({ id }: { id: string }) {
  const [isfileUploaded, setIsfileUploaded] = useState(false);

  const formattedId = id === 'thumbnail' ? 'Thmbnail' : `Additional File ${id}`;

  return (
    <>
      <FormLabel>{formattedId}</FormLabel>
      <FileInputLabel htmlFor={formattedId}>
        {isfileUploaded ? (
          <>
            <IconSuccess /> File Uploaded
          </>
        ) : (
          <>
            <IconUpload /> Upload file
          </>
        )}
      </FileInputLabel>
      <FileInput
        type='file'
        id={formattedId}
        name='files'
        accept='image/*'
        required
        onChange={() => setIsfileUploaded(true)}
      />
    </>
  );
}
