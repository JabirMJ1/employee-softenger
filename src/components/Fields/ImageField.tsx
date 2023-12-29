import Image from 'next/image';
import React, { ChangeEventHandler, useEffect, useState } from 'react';
import Label from '../Label';
import { BLANK_IMAGE_URL_SQ } from '@/constants';

type MyProps = {
  name: string
  value?:string | null
  onChange: (_value: any) => void
  required?: boolean
}

const ImageField = (props: MyProps) => {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null | undefined>(props.value);

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader?.result);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setImagePreview(props.value)
  }, [props.value])

  useEffect(() => {
    props.onChange(imagePreview)
  }, [imagePreview])

  return (
    <div className="space-y-2">
        <div>
            <Label title={props.name} required={props.required}/>
            <span className="w-36 block relative aspect-square rounded bg-gray-500">
              <Image 
              src={(imagePreview as string ?? BLANK_IMAGE_URL_SQ)}
              alt="Preview" 
              className="relative object-cover"
              fill/>
            </span>
        </div>
      <input type="file" onChange={handleImageChange} />
    </div>
  );
};

export default ImageField;