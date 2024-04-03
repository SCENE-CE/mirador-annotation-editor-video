import AnnotationCreationWindowWrapper from "../wrapper/AnnotationCreationWindowWrapper";
import externalStorageAnnotationPlugin from 'mirador-annotations/es/plugins/externalStorageAnnotationPlugin';
import canvasAnnotationsPlugin from 'mirador-annotations/es/plugins/canvasAnnotationsPlugin';
import annotationCreationCompanionWindow from 'mirador-annotations/es/plugins/annotationCreationCompanionWindow';
import windowSideBarButtonsPlugin from 'mirador-annotations/es/plugins/windowSideBarButtonsPlugin';

export{
    AnnotationCreationWindowWrapper,
    externalStorageAnnotationPlugin,canvasAnnotationsPlugin,annotationCreationCompanionWindow,
    windowSideBarButtonsPlugin,
}

export default [
{
    component: AnnotationCreationWindowWrapper,
        mode:'wrap',
    target:'AnnotationSettings',
},
    externalStorageAnnotationPlugin,
    canvasAnnotationsPlugin,
    annotationCreationCompanionWindow,
    windowSideBarButtonsPlugin,
]
