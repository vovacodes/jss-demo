import jss from 'jss';
import jssCamelCase from 'jss-camel-case';
import jssNested from 'jss-nested';
import jssVendorPrefixer from 'jss-vendor-prefixer';

jss.use(jssCamelCase(), jssNested(), jssVendorPrefixer());

export default jss;
