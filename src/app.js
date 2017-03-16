import tinymce from 'tinymce'

import 'tinymce/themes/modern'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/link'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/table'
import 'tinymce/plugins/wordcount'

// File loader that handles moving the skin files
require.context(
  'file-loader?name=[path][name].[ext]&context=node_modules/tinymce!tinymce/skins',
  true,
  /.*/
)

// Initialize
tinymce.init({
  selector: '#tiny',
  plugins: [
    'paste',
    'link',
    'autoresize',
    'imagetools',
    'table',
    'wordcount'
  ],
  setup (editor) {
    editor.on('keyup', e => console.log(editor.getContent()))
  }
})
