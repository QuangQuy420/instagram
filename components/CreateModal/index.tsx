import Image from "next/image";
import { useRef, useState } from "react";

export interface CreateModalProps {
    isShow: Function
}

export default function CreateModal(props: CreateModalProps) {
    const { isShow } = props;
    const [fileImage, setFileImage] = useState('');
    const modalElement = useRef<HTMLDivElement>(null);


    /**
     * Handle when close modal by clicking into overlay.
     */
    const closeModal = (e: any) => {
        e.stopPropagation();
        if (modalElement.current) {
            modalElement.current.style.display = 'none';
            isShow(false);
        }
    }

    const handleDrop = (e: any, type: string) => {
        if(type === 'drop') {
            e.preventDefault();
            setFileImage(e.dataTransfer.files);
            console.log('image', fileImage);
        } else {
            setFileImage(e.target.files);
            console.log('input', fileImage);
        }
    }

    const handleDragOver = (e: any) => {
        e.preventDefault();
    }

    return (
        <div
            className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 cursor-default"
            onClick={closeModal}
            ref={modalElement}
        >
            {/* <!-- modal --> */}
            <div 
                className="bg-white rounded shadow-lg w-10/12 md:w-1/3"
                onClick={e => { e.stopPropagation() }}
            >
                {/* <!-- modal header --> */}
                <div className="border-b px-4 py-2 flex justify-center items-center">
                    <h3 className="font-semibold text-lg">Create new post</h3>
                </div>
                {/* <!-- modal body --> */}
                <div 
                    onDrop={(e) => handleDrop(e, 'drop')} 
                    onDragOver={handleDragOver}
                    className='py-24'
                >
                    <div className="p-3 mt-10 flex justify-center">
                        <Image src="/images/image_icon.png" alt="" width={100} height={100}></Image>
                    </div>
                    <div className="pb-3 flex justify-center text-xl">
                        <span>Drag photos or videos here</span>
                    </div>
                    <div className="flex justify-center items-center w-100 mb-20 p-3">
                        <label htmlFor="inputFile" className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white cursor-pointer">Select from computer</label>
                        <input
                            id="inputFile"
                            type="file"
                            className="hidden"
                            onChange={(e) => handleDrop(e, 'input')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}