export default function UpdatesList() {
    return (
        <div className="flex h-full">
            <div className="grid grid-cols-2 gap-4 w-full pt-2">

                <div className="flex flex-1 bg-base-100 rounded-lg"></div>

                <div className="flex flex-1">
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-base-100 rounded-lg"></div>
                        <div className="bg-base-100 rounded-lg"></div>
                    </div>
                </div>

                <div className="flex flex-1 bg-base-100 rounded-lg"></div>

                <div className="flex flex-1">
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-base-100 rounded-lg p-4">
                            <div className="flex flex-col space-y-8">
                                <header className="font-bold text-2xl"> Your Transfers</header>

                                <div className="flex flex-col">

                                    <div className="flex flex-1 justify-between">

                                        <div className="flex flex-col">
                                            <h5 className="font-bold text-sm">From Anna Jones</h5>
                                            <p className="opacity-60 font-medium text-sm">Today, 14:34</p>
                                        </div>

                                        <div className="bg-accent text-primary-content px-2 rounded-xl text-sm flex items-center"> +2.45%</div>

                                    </div>
                                    <div className="flex flex-1 justify-between">

                                        <div className="flex flex-col">
                                            <h5 className="font-bold text-sm">To Carlos Brown III</h5>
                                            <p className="opacity-60 font-medium text-sm">Today, 15:23</p>
                                        </div>

                                        <div className="bg-accent-content text-error-content px-2 rounded-xl text-sm flex items-center"> -4.75%</div>

                                    </div>
                                    <div className="flex flex-1 justify-between">

                                        <div className="flex flex-col">
                                            <h5 className="font-bold text-sm">From Joel Cannan</h5>
                                            <p className="opacity-60 font-medium text-sm">Today 14:34</p>
                                        </div>

                                        <div className="bg-accent text-primary-content px-2 rounded-xl text-sm flex items-center"> +2.45%</div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="bg-base-100 rounded-lg"></div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

