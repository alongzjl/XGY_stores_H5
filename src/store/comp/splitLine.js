// 图片
const data = {
	style:     {
		line: {
			borderTop: {
				width: '2px',
				style: 'solid',
				color: { type: 'custom', color: '#000' }
			}
		}  
	}, 
	layout: {
		position: 'absolute',
		top:      '0px',
		left:     '0px',
		width:    '1080px',
		height:   '40px'
	},
	content: {},
	animation: {
		className: '',	// 动画样式
		direction: '',				// 方向
		delay: 0,					// 开始时间
		duration: 1,				// 持续时间
		iterationCount: 1			// 循环次数
	}
}
const data2 = JSON.parse(JSON.stringify(data))
data2.style.line = {
	borderLeft: {
		width: 1,
		style: 'solid',
		color: { type: 'custom', color: '#000' }
	}
}
data2.layout = {
	position: 'absolute',
	top:      '0px',
	left:     '0px',
	width:    '40px',
	height:   '160px'
}

module.exports = {
	name: 'splitLine',
	type: 'base',
	// 位置大小
	// 样式管理
	data: JSON.parse(JSON.stringify(data)),
	// 内容管理
	// 样式列表
	styleList: {
		idx:  0,
		list: [
			{
				name: '横向',
				img:  '',
				data: JSON.parse(JSON.stringify(data))
			},
			{
				name: '纵向',
				img:  '',
				data: JSON.parse(JSON.stringify(data2))
			}
		]
	},
	// 功能特性
	feature: {
	}
}