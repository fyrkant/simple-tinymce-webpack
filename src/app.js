import tinymce from 'tinymce'

import 'tinymce/themes/inlite'
import 'tinymce/themes/modern'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/link'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/table'
import 'tinymce/plugins/wordcount'

// File loader that handles moving the skin files
require.context(
  'file-loader?name=[path][name].[ext]&context=node_modules/tinymce!tinymce/skins',
  true,
  /.*/
)

tinymce.init({
  selector: 'textarea',
  plugins: 'paste link autoresize table wordcount',
  setup (editor) {
    editor.on('keyup', e => console.log(editor.getContent()))
  }
})

// Initialize
tinymce.init({
  selector: '.editor',
  theme: 'inlite',
  inline: true,
  setup (editor) {
    editor.on('keyup', e => console.log(editor.getContent()))
  }
})
