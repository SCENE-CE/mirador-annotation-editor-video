import * as actions from 'mirador/dist/es/src/state/actions';
import { getCompanionWindow } from 'mirador/dist/es/src/state/selectors/companionWindows';
import {
    getVisibleCanvasAudioResources,
    getVisibleCanvases,
    getVisibleCanvasVideoResources
} from 'mirador/dist/es/src/state/selectors/canvases';
import { getPresentAnnotationsOnSelectedCanvases } from 'mirador/dist/es/src/state/selectors/annotations';
import annotationForm from 'mirador-annotations/src/annotationForm/AnnotationForm';
import { playerReferences } from 'mirador-annotations/src/playerReferences';
import { OSDReferences } from 'mirador/dist/es/src/plugins/OSDReferences';
import {VideosReferences} from "mirador/dist/es/src/plugins/VideosReferences";
import { withTranslation } from 'react-i18next';
import translations from '../locales';

/** */
const mapDispatchToProps = (dispatch, { id, windowId }) => ({
    closeCompanionWindow: () => dispatch(
        actions.removeCompanionWindow(windowId, id),
    ),
    receiveAnnotation: (targetId, annoId, annotation) => dispatch(
        actions.receiveAnnotation(targetId, annoId, annotation),
    ),
    // setCurrentTime: (...args) => dispatch(actions.setWindowCurrentTime(windowId, ...args)),
    // setSeekTo: (...args) => dispatch(actions.setWindowSeekTo(windowId, ...args)),
});

/** */
function mapStateToProps(state, { id: companionWindowId, windowId }) {
    const currentTime = null;
    const cw = getCompanionWindow(state, { companionWindowId, windowId });
    const { annotationid } = cw;
    const canvases = getVisibleCanvases(state, { windowId });

    const videoResources = getVisibleCanvasVideoResources(state, { windowId });
    // TODO add check on audioResources  getVisibleCanvasAudioResources

    if(videoResources){
        playerReferences.init(state, windowId,VideosReferences, actions);
    }else{

        playerReferences.init(state, windowId,OSDReferences, actions);
    }
    // This could be removed but it's serve the useEffect in AnnotationForm for now.
    let annotation = getPresentAnnotationsOnSelectedCanvases(state, { windowId })
        .flatMap((annoPage) => annoPage.json.items || [])
        .find((annot) => annot.id === annotationid);

    // New annotation has no ID and no templateType defined
    if (!annotation) {
        annotation = {
            id: null,
            maeData: {
                templateType: null,
            },
        };
    }

    return {
        currentTime,
        annotation,
        canvases,
        config: {...state.config, translations},
        getMediaAudio: getVisibleCanvasAudioResources(state, { windowId }),
    };
}

const AnnotationFormWithTranslation = withTranslation()(annotationForm);


export default {
    companionWindowKey: 'annotationCreation',
    component: AnnotationFormWithTranslation,
    mapDispatchToProps,
    mapStateToProps,
};
