// when update assets, just need to edit whiteAssetList
const whiteAssetList: string[] = [
    'dark',
    'light'
]
const images = (
    () => {
        let resPaths = {};
        whiteAssetList.forEach(e=>{
            if(!resPaths[e]){
                resPaths[e] = []
            }
            let requireContext = require.context('.',true, /\.(png|jpg|gif)$/);
            if(requireContext.keys().length){
                requireContext.keys().forEach((key, index)=>{
                    let path = requireContext.keys()[index]
                    let file = key.split('/').pop();
                    let fileName = ''
                    if(file.split('-').length){
                        fileName = file.split('-')[0];
                    }
                    if(fileName && fileName === e){
                        resPaths[e].push({img: requireContext(path), path})
                    }
                    
                })
            }
        });
        return resPaths
    }
)();
export default images;
