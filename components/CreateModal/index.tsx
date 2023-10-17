import Image from "next/image";
import { useRef, useState } from "react";

export interface CreateModalProps {
    isShow: Function
}

export default function CreateModal(props: CreateModalProps) {
    const { isShow } = props;
    const [isDrag, setDrag] = useState(false);
    const modalElement = useRef<HTMLDivElement>(null);


    /**
     * Handle when close modal by clicking into overlay.
     */
    const closeModal = () => {
        if (modalElement.current) {
            modalElement.current.style.display = 'none';
            isShow(false);
        }
    }

    const handleDrop = (e: any) => {
        e.preventDefault();
        console.log('drop', e.dataTransfer.files);
    }

    const handleDragOver = (e: any) => {
        e.preventDefault();
        console.log('over', e.dataTransfer.files);
    }

    return (
        <div
            className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
            onClick={closeModal}
            ref={modalElement}
        >
            {/* <!-- modal --> */}
            <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
                {/* <!-- modal header --> */}
                <div className="border-b px-4 py-2 flex justify-center items-center">
                    <h3 className="font-semibold text-lg">Create new post</h3>
                </div>
                {/* <!-- modal body --> */}
                <div onDrop={handleDrop} onDragOver={handleDragOver} className={`border border-indigo-600 ${isDrag ? 'border-dashed' : ''} z-20`}>
                    <div className="p-3 mt-10 flex justify-center">
                        <Image src="/images/image_icon.png" alt="" width={100} height={100}></Image>
                    </div>
                    <div className="pb-3 flex justify-center text-xl">
                        <span>Drag photos or videos here</span>
                    </div>
                    <div className="flex justify-center items-center w-100 mb-20 p-3">
                        <label htmlFor="inputFile" className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Choose</label>
                        <input
                            id="inputFile"
                            type="file"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}