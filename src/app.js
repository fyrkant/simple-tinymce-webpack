import tinymce from 'tinymce'

import 'tinymce/themes/modern'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/link'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/table'

require.context(
  'file?name=[path][name].[ext]&context=node_modules/tinymce!tinymce/skins',
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
    'table'
  ]
})
