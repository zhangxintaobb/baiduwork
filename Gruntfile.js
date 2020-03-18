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
            }
        }
    })


    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("release", ['copy', 'htmlmin', 'cssmin', 'uglify']);
}