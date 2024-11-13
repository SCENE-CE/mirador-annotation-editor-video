import Mirador from 'mirador/dist/es/src/index';
import LocalStorageAdapter from 'mirador-annotations/src/annotationAdapter/LocalStorageAdapter';
import MiradorAnnotationEditionVideoPlugin from '../../src/plugin/MiradorAnnotationEditionVideoPlugin'

const config = {
    id: 'demo',
    catalog: [
        {manifestId: 'https://purl.stanford.edu/sn904cj3429/iiif/manifest'},
        {manifestId: 'https://files.tetras-libre.fr/dev/Clock/manifest.json'},
        {manifestId: 'https://files.tetras-libre.fr/dev/Heterogeneous-media-on-several-canvases.json'},
        {manifestId: "https://dzkimgs.l.u-tokyo.ac.jp/videos/cat2020/manifest.json"},
        {manifestId: "https://files.tetras-libre.fr/dev/vertical_video_with_annot.json"}
    ],
    theme: {
        palette: {
            primary: {
                main: '#6e8678',
            },
        },
    },
    annotation: {
        adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
        // adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
        exportLocalStorageAnnotations: false, // display annotation JSON export button
    },
};

Mirador.viewer(config, [
    ...MiradorAnnotationEditionVideoPlugin,
]);
