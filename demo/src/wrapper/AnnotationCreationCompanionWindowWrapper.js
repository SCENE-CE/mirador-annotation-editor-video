import * as actions from 'mirador/dist/es/src/state/actions';
import { getCompanionWindow } from 'mirador/dist/es/src/state/selectors/companionWindows';
import { getWindowCurrentTime, getWindowPausedStatus } from 'mirador/dist/es/src/state/selectors/window';
import { getVisibleCanvasAudioResources, getVisibleCanvases } from 'mirador/dist/es/src/state/selectors/canvases';
import { getPresentAnnotationsOnSelectedCanvases } from 'mirador/dist/es/src/state/selectors/annotations';
import { VideosReferences } from 'mirador/dist/es/src/plugins/VideosReferences';
import { OSDReferences } from 'mirador/dist/es/src/plugins/OSDReferences';
import annotationForm from 'mirador-annotations/es/AnnotationForm';
/** */
const mapDispatchToProps = (dispatch, { id, windowId }) => ({
    closeCompanionWindow: () => dispatch(
        actions.removeCompanionWindow(windowId, id),
    ),
    receiveAnnotation: (targetId, annoId, annotation) => dispatch(
        actions.receiveAnnotation(targetId, annoId, annotation),
    ),
    setCurrentTime: (...args) => dispatch(actions.setWindowCurrentTime(windowId, ...args)),
    setSeekTo: (...args) => dispatch(actions.setWindowSeekTo(windowId, ...args)),
});

/** */
function mapStateToProps(state, { id: companionWindowId, windowId }) {
    const currentTime = getWindowCurrentTime(state, { windowId });
    const cw = getCompanionWindow(state, { companionWindowId, windowId });
    const { annotationid } = cw;
    const canvases = getVisibleCanvases(state, { windowId });
    const mediaVideo = VideosReferences.get(windowId);
    const osdref = OSDReferences.get(windowId);
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
        annotation,
        canvases,
        config: state.config,
        currentTime,
        mediaVideo,
        osdref,
        getMediaAudio: getVisibleCanvasAudioResources(state, { windowId }),
        paused: getWindowPausedStatus(state, { windowId }),
        getVisibleCanvase: getVisibleCanvases(state, { windowId }),
        version:'Video-Wrapper',
    };
}

export default {
    companionWindowKey: 'annotationCreation',
    component: annotationForm,
    mapDispatchToProps,
    mapStateToProps,
};
