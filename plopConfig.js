const fs = require("fs");
const path = require("path");
console.log('get path', path.join(__dirname, "./src/components"))
const pageComponents = fs.readdirSync(
path.join(__dirname, "./src/components")
);
const components = pageComponents;
function componentExists(comp) {
return components.indexOf(comp) >= 0;
}
module.exports =  (plop) => {
	// 创建一个生成器
	plop.setGenerator('component', {
		description: 'add a component template', 
		prompts: [  
			{
				type: 'input',
				name: 'componentName',
				message: 'please entry module name',
				default: 'Test',
				validate: value => {
					if (/.+/.test(value)) {
						return componentExists(value)
							? 'same component exist'
							: true;
					}
					return 'its required';
				},
			},
		],
		actions: data => {
			const actions = [
				{
					type: 'add',
					path: './src/components/{{properCase componentName}}/index.tsx',
					templateFile: './template/index.tsx',
					abortOnFail: true,
				},
				{
					type: 'add',
					path: './src/components/{{properCase componentName}}/index.less',
					templateFile: './template/index.less',
					abortOnFail: true,
				},
				{
					type: 'add',
					path: './src/components/{{properCase componentName}}/theme/dark.ts',
					templateFile: './template/theme/dark.ts',
					abortOnFail: true,
				},
				{
					type: 'add',
					path: './src/components/{{properCase componentName}}/theme/index.ts',
					templateFile: './template/theme/index.ts',
					abortOnFail: true,
				},
				{
					type: 'add',
					path: './src/components/{{properCase componentName}}/theme/light.ts',
					templateFile: './template/theme/light.ts',
					abortOnFail: true,
				},
				{
					type: 'add',
					path: './src/components/{{properCase componentName}}/themeStyle/dark.less',
					templateFile: './template/themeStyle/dark.less',
					abortOnFail: true,
				},
				{
					type: 'add',
					path: './src/components/{{properCase componentName}}/themeStyle/index.less',
					templateFile: './template/themeStyle/index.less',
					abortOnFail: true,
				},
				{
					type: 'add',
					path: './src/components/{{properCase componentName}}/themeStyle/light.less',
					templateFile: './template/themeStyle/light.less',
					abortOnFail: true,
				},
			];
			return actions;
		},
	});
};