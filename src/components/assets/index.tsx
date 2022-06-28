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
                resPaths[e] = {}
            }
            let requireContext = require.context('.',true, /\.(png|jpg|gif)$/);
            if(requireContext.keys().length){
                requireContext.keys().forEach((key, index)=>{
                    let path = requireContext.keys()[index]
                    let file = key.split('/').pop();
                    let themeName = ''
                    let fileName = ''
                    if(file.split('-').length){
                        themeName = file.split('-')[0];
                        fileName = file.split('-')[1].split('.')[0] || 'default';
                    }
                    if(themeName && themeName === e){
                        resPaths[e][fileName] = {img: requireContext(path), path}
                    }
                    
                })
            }
        });
        return resPaths
    }
)();
export default images;
