import tinymce from 'tinymce/tinymce'

import 'tinymce/themes/modern/theme'
import 'tinymce/plugins/paste/plugin'
import 'tinymce/plugins/link/plugin'
import 'tinymce/plugins/autoresize/plugin'
import 'tinymce/plugins/imagetools/plugin'
import 'tinymce/plugins/table/plugin'

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
