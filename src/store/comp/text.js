// 文本
const data = {
	style:     {
		text: { 
			textAlign:      'center',
			fontSize:       '24px', 
			lineHeight:     '36px',
			transform:       { rotate: 0 },
			fontStyle:      'normal',
			fontWeight:     'normal',
			textDecoration: 'none',
			opacity:        1,
			textShadow:     {
				h_shadow:   '0px',
				v_shadow:   '0px',
				blur_dis:   '0px',
				color:      { type: 'custom', color: '#f58f8f' }
			},
			color:          { type: 'custom', color: '#333' }
		}
	},
	layout: {
		position: 'absolute',
		top:      '0px',
		left:     '0px',
		width:    '240px',
		height:   '60px'
	},
	content: {
		text:   '', 			// 文字内容
		router: {type:'router',url:''}				// 路由
	},
	type:'normal',
	animation: {
		className: '',	// 动画样式
		direction: '',				// 方向
		delay: 0,					// 开始时间
		duration: 1,				// 持续时间
		iterationCount: 1			// 循环次数
	}
}
var style = {
}

module.exports = {
	name: 'text',
	type: 'base',
	// 位置大小
	// 样式管理
	data: JSON.parse(JSON.stringify(data)),
	// 内容管理
	// 样式列表
	styleList: {
		idx:  0,
		list: [{
			name:  '样式1',
			img:   '',
			data:  JSON.parse(JSON.stringify(data))
		}/*, {
			name:  '样式2',
			img:   '',
			data:  JSON.parse(JSON.stringify(data))
		}, {
			name:  '样式3',
			img:   '',
			data:  JSON.parse(JSON.stringify(data))
		}*/] 
	},
	// 功能特性
	feature: {
	}
}