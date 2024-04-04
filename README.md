# Mirador Annotation Editor - GPL edition

## Presentation

### Generalities

`mirador-annotation-editor-video`(also know as "MAEV") is a [Mirador 4](https://github.com/projectmirador/mirador) plugin 
that adds annotation video support to [MAE](https://github.com/SCENE-CE/mirador-annotation-editor). It wraps the original
MAE plugin to add video annotation support.

### Copyrights

#### Licence

 `mirador-annotation-editor-video` is distributed under the **GPL v3**.

Please acknowledge that any modification you make must be distributed under a compatible licence and cannot be closed source.

If you need to integrate this code base in closed source pieces of software, please contact us so we can discuss dual licencing.

#### Property

The base of this software (up to V1) is the property of [SATT Ouest Valorisation](https://www.ouest-valorisation.fr/) that funded its development under the french public contract AO-MA2023-0004-DV5189.

#### Authors

The authors of this software are :

- Clarisse Bardiot (concept and use cases)
- Jacob Hart (specifications)
- [Tétras Libre SARL](https://tetras-libre.fr) (development):
    - David Rouquet
    - Anthony Geourjon
    - Antoine Roy

#### Contributors (updated february 2024)

- AZOPSOFT SAS
    - Samuel Jugnet (especially code for the Konvas part)
- Loïs Poujade (especially the original modifications to anotate videos)

### General functionalities

- Add video annotation support to `mirador-annotation-editor`
- Wrap `mirador-annotation-editor`

### Technical aspects

- Support Material UI 5 and React 18 to follow latest Mirador upgrades
- Need a custom 


## Use in npm project

You can override Mirador and existing annotation plugin with your own versions by using npm. We support React 18 and MUI 5.
You need to use our custom Mirador 4 version. https://github.com/SCENE-CE/mirador-video

```js
"mirador": "npm:mirador-video@^1.0.2",
"mirador-annotations": "npm:mirador-annotation-editor-video@^1.0.3",
```

You can find an example of integration in our Mirador-integration repository : https://gitlab.tetras-libre.fr/iiif/mirador/mirador-integration

## Install (local)


This method requires `nvm`, `npm`.

```
git clone git@github.com:SCENE-CE/mirador-annotation-editor-video.git
cd mirador-annotation-editor
nvm use
npm install
```

Run a demo with Mirador and the MAEV plugin :

```
npm start
```


## Persisting Annotations
Persisting annotations requires implementing an a IIIF annotation server. Several [examples of annotation servers](https://github.com/IIIF/awesome-iiif#annotation-servers) are available on iiif-awesome.

`mirador-annotation-editor-editor` currently supports adapters for [annotot](https://github.com/ProjectMirador/mirador-annotations/blob/master/src/AnnototAdapter.js) and [local storage](https://github.com/ProjectMirador/mirador-annotations/blob/master/src/LocalStorageAdapter.js). We welcome contributions of adapters for other annotation servers.

## Contribute

Our plugin follow the Mirador guidelines. Development, design, and maintenance is driven by community needs and ongoing feedback and discussion.
To suggest features, report bugs, and clarify usage, please submit a GitHub issue.

