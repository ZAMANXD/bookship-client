import React from 'react';

const ModalDelete = (props: any) => {
    const { setDecision } = props
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you Sure want to delete the Rating?</h3>
                    <div className='flex justify-around'>
                        <div className="modal-action">
                            <label onClick={() => setDecision(true)} htmlFor="my-modal-6" className="bg-red-400 px-5 py-3 rounded-md text-white cursor-pointer">Yes</label>
                        </div>
                        <div className="modal-action">
                            <label onClick={() => setDecision(false)} htmlFor="my-modal-6" className="bg-green-400 px-5 py-3 rounded-md text-white cursor-pointer">No</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;