import Loading from "./Loading";

const ImagePreview = (props) => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Original Image */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
                    Original Image
                </h2>

                {props.uploaded ? (
                    <img
                        src={props.uploaded}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-gray-200">
                        No Image Selected
                    </div>
                )}
            </div>

            {/* Enhanced Image Image */}
            {/* Enhanced Image Image */}
<div className="bg-white shadow-lg rounded-xl overflow-hidden">
    <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
        Enhanced Image
    </h2>

    {props.loading ? (
        <Loading />
    ) : props.enhanced ? (
        <div>
            <img
                src={props.enhanced}
                alt="Enhanced"
                className="w-full h-full object-cover"
            />
            <div className="flex justify-center py-4">
                <button
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = props.enhanced;
                        link.download = "enhanced-image.png"; // customize if needed
                        link.click();
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    Download Enhanced Image
                </button>
            </div>
        </div>
    ) : (
        <div className="flex items-center justify-center h-80 bg-gray-200">
            No Enhanced Image
        </div>
    )}
</div>

        </div>
    );
};

export default ImagePreview;
