import AnnotationCreationWindowWrapper from "../wrapper/AnnotationCreationWindowWrapper";
import externalStorageAnnotationPlugin from 'mirador-annotations/src/plugins/externalStorageAnnotationPlugin';
import canvasAnnotationsPlugin from 'mirador-annotations/src/plugins/canvasAnnotationsPlugin';
import windowSideBarButtonsPlugin from 'mirador-annotations/src/plugins/windowSideBarButtonsPlugin';
import AnnotationCreationCompanionWindowWrapper from "../wrapper/AnnotationCreationCompanionWindowWrapper";
import translations from '../locales.js'
export{
    AnnotationCreationWindowWrapper,
    externalStorageAnnotationPlugin,canvasAnnotationsPlugin,AnnotationCreationCompanionWindowWrapper,
    windowSideBarButtonsPlugin,
}

export default [
{
    component: AnnotationCreationWindowWrapper,
        mode:'wrap',
    target:'AnnotationSettings',
    config: {
        translations,
    },

},
    externalStorageAnnotationPlugin,
    canvasAnnotationsPlugin,
    AnnotationCreationCompanionWindowWrapper,
    windowSideBarButtonsPlugin,
]
