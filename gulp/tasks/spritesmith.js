'use strict';

module.exports = function() {
	$.gulp.task('sprite', function() {
		var spriteData = $.gulp.src('./source/images/icon/*.*') // путь, откуда берем картинки для спрайта
	        .pipe($.spritesmith({
	            imgName: 'img/sprite.png', // путь, куда сохраняем картинку
	            cssName: 'css/sprite.css', // путь, куда сохраняем стили
	            padding: 20,
	        }));
		return spriteData.pipe($.gulp.dest('./build/assets/'));
	});
};

