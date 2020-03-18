module.exports = function(grunt) {
    grunt.initConfig({

        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: "dist/demo.html",
                dest: "dist/demo.html"
            }
        },
        cssmin: {
            "dist/demo.css": "dist/demo.css"
        },
        uglify: {
            release: {
                files: {
                    "dist/demo.js": "dist/demo.js"
                }
            }
        },
        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 1 //定义 PNG 图片优化水平
                },
                files: [{
                    expand: true,
                    cwd: './img', //原图存放的文件夹
                    src: ['**/*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                    dest: 'dist/img/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }]
            }
        },
        copy: {
            html: {
                src: "./demo.html",
                dest: "./dist/demo.html"
            },
            css: {
                src: "./demo.css",
                dest: "./dist/demo.css"
            },
            js: {
                src: "./demo.js",
                dest: "./dist/demo.js"
            },
            image: {
                src: "./img",
                dest: "./dist/img"
            }
        }
    })


    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask("release", ['copy', 'htmlmin', 'cssmin', 'uglify', 'imagemin']);
}