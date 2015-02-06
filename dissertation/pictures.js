'use strict';
var fs = require('fs');

var images = ['mo10im50.gif', 'mo10im51.gif', 'mo10im52.gif', 'mo10im53.gif', 'mo10im54.gif', 'mo11im55.gif', 'mo11im56.gif', 'mo11im57.gif', 'mo11im58.gif', 'mo11im59.gif', 'mo11im60.gif', 'mo12im61.gif', 'mo12im62.gif', 'mo12im63.gif', 'mo12im64.gif', 'mo12im65.gif', 'mo12im66.gif', 'mo12im67.gif', 'mo12im68.gif', 'mo12im69.gif', 'mo13im70.gif', 'mo13im71.gif', 'mo13im72.gif', 'mo13im73.gif', 'mo13im74.gif', 'mo14im75.gif', 'mo14im76.gif', 'mo14im77.gif', 'mo14im78.gif', 'mo14im79.gif', 'mo15im80.gif', 'mo15im81.gif', 'mo15im82.gif', 'mo15im83.gif', 'mo15im84.gif', 'mo15ima1.gif', 'mo15ima2.gif', 'mo15ima3.gif', 'mo15ima4.gif', 'mo15ima5.gif', 'mo27ima6.gif', 'mo27ima7.gif', 'mo28ima8.gif', 'mo29im10.gif', 'mo29ima9.gif', 'mo30im11.gif', 'mo46im12.gif', 'mo48im13.gif', 'mo49im14.gif', 'mo59im15.gif', 'mo60im16.gif', 'mo60im17.gif', 'mo60im18.gif', 'mo60im19.gif', 'mo60im20.gif', 'mo60im21.gif', 'mo60im22.gif', 'mo60im23.gif', 'mo61im24.gif', 'mo63im25.gif', 'mo63im26.gif', 'mo63im27.gif', 'mo63im28.gif', 'mo70im29.gif', 'mo89im30.gif', 'mo89im31.gif', 'mo90im32.gif', 'mo92im33.gif', 'mo92im34.gif', 'mo92im35.gif', 'mo92im36.gif', 'mo94im37.gif', 'mo95im38.gif', 'mo95im39.gif', 'mo95im40.gif', 'mo95im41.gif', 'mo95im42.gif', 'mo95im43.gif', 'mo98im44.gif', 'mo98im45.gif', 'mo98im46.gif', 'mo98im47.gif', 'mo98im48.gif', 'mo99im49.gif'];
var files = ['mode_100.htm', 'mode_101.htm', 'mode_102.htm', 'mode_103.htm', 'mode_104.htm', 'mode_105.htm', 'mode_106.htm', 'mode_107.htm', 'mode_108.htm', 'mode_109.htm', 'mode_110.htm', 'mode_111.htm', 'mode_112.htm', 'mode_113.htm', 'mode_114.htm', 'mode_115.htm', 'mode_116.htm', 'mode_117.htm', 'mode_118.htm', 'mode_119.htm', 'mode_120.htm', 'mode_121.htm', 'mode_122.htm', 'mode_123.htm', 'mode_124.htm', 'mode_125.htm', 'mode_126.htm', 'mode_127.htm', 'mode_128.htm', 'mode_129.htm', 'mode_130.htm', 'mode_131.htm', 'mode_132.htm', 'mode_133.htm', 'mode_134.htm', 'mode_135.htm', 'mode_136.htm', 'mode_137.htm', 'mode_138.htm', 'mode_139.htm', 'mode_140.htm', 'mode_141.htm', 'mode_142.htm', 'mode_143.htm', 'mode_144.htm', 'mode_145.htm', 'mode_146.htm', 'mode_147.htm', 'mode_148.htm', 'mode_149.htm', 'mode_150.htm', 'mode_151.htm', 'mode_152.htm', 'mode_153.htm', 'mode_154.htm', 'mode_155.htm', 'mode_156.htm', 'mode_157.htm', 'mode_158.htm', 'mode_159.htm', 'mode_160.htm', 'model_1.htm', 'model_10.htm', 'model_11.htm', 'model_12.htm', 'model_13.htm', 'model_14.htm', 'model_15.htm', 'model_16.htm', 'model_17.htm', 'model_18.htm', 'model_19.htm', 'model_2.htm', 'model_20.htm', 'model_21.htm', 'model_22.htm', 'model_23.htm', 'model_24.htm', 'model_25.htm', 'model_26.htm', 'model_27.htm', 'model_28.htm', 'model_29.htm', 'model_3.htm', 'model_30.htm', 'model_31.htm', 'model_32.htm', 'model_33.htm', 'model_34.htm', 'model_35.htm', 'model_36.htm', 'model_37.htm', 'model_38.htm', 'model_39.htm', 'model_4.htm', 'model_40.htm', 'model_41.htm', 'model_42.htm', 'model_43.htm', 'model_44.htm', 'model_45.htm', 'model_46.htm', 'model_47.htm', 'model_48.htm', 'model_49.htm', 'model_5.htm', 'model_50.htm', 'model_51.htm', 'model_52.htm', 'model_53.htm', 'model_54.htm', 'model_55.htm', 'model_56.htm', 'model_57.htm', 'model_58.htm', 'model_59.htm', 'model_6.htm', 'model_60.htm', 'model_61.htm', 'model_62.htm', 'model_63.htm', 'model_64.htm', 'model_65.htm', 'model_66.htm', 'model_67.htm', 'model_68.htm', 'model_69.htm', 'model_7.htm', 'model_70.htm', 'model_71.htm', 'model_72.htm', 'model_73.htm', 'model_74.htm', 'model_75.htm', 'model_76.htm', 'model_77.htm', 'model_78.htm', 'model_79.htm', 'model_8.htm', 'model_80.htm', 'model_81.htm', 'model_82.htm', 'model_83.htm', 'model_84.htm', 'model_85.htm', 'model_86.htm', 'model_87.htm', 'model_88.htm', 'model_89.htm', 'model_9.htm', 'model_90.htm', 'model_91.htm', 'model_92.htm', 'model_93.htm', 'model_94.htm', 'model_95.htm', 'model_96.htm', 'model_97.htm', 'model_98.htm', 'model_99.htm'];

var map = [];
for (var i = files.length - 1; i >= 0; i--) {
	var file = fs.readFileSync(files[i], 'utf8');

	for (var j = images.length - 1; j >= 0; j--) {

    	if (file.indexOf(images[j]) >= 0) {
			map.push({
				image: images[j],
				file: files[i],
				pageNo: files[i].split('_')[1].split('.')[0]
			});
			break;
		}
	};
}

fs.writeFileSync('map.txt', JSON.stringify(map));

