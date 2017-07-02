<template>
  <div id="ad" class="mw7 tc center white pa3 f2 b lh-copy"></div>
</template>

<script>
import MediumEditor from 'medium-editor'
import rangy from 'rangy/lib/rangy-core.js'
import 'rangy/lib/rangy-classapplier'

export default {
  props: ['copy'],
  name: 'advertisement',
  mounted () {
    rangy.init()
    let CheckboxButton = MediumEditor.extensions.button.extend({
      name: 'checkbox',
      tagNames: ['div'],
      contentDefault: '✔',
      aria: 'Check',
      action: 'highlight',
      init: function () {
        MediumEditor.extensions.button.prototype.init.call(this)
        this.classApplier = rangy.createClassApplier('checkbox', {
          elementTagName: 'div',
          normalize: true
        })
      },
      handleClick: function (event) {
        this.classApplier.toggleSelection()
        this.base.checkContentChanged()
      }
    })

    let opts = {
      disableExtraSpaces: true,
      toolbar: {
        allowMultiParagraphSelection: false,
        buttons: ['checkbox']
      },
      extensions: {
        'checkbox': new CheckboxButton()
      }
    }
    let editor = new MediumEditor('#ad', opts)
    editor.setContent(this.copy, 0)
  }
}
</script>

<style>
  #ad {
    border: 1px dashed transparent;
    transition: border .2s ease-out;
  }

  #ad:hover {
    border-color: rgba(255,255,255, .35);
  }

  #ad:focus {
    border-color: rgba(255,255,255, .5);
    outline: 0;
  }

  .medium-editor-toolbar li button {
    background: #006298;
    border: 2px solid #FDC435;
    border-radius: 4px;
    color: white;
    font-size: 18px;
    padding: 10px;
  }

  .medium-toolbar-arrow-under:after, .medium-toolbar-arrow-over:before {
    display: none;
  }

  .checkbox {
    background: white;
    display: inline-flex;
    align-items: center;
    font-size: .60em;
    font-weight: normal;
    padding: .25em;
    margin: 0 .25em;
    position: relative;
    color: #555;
  }

  .checkbox:before {
    content: '';
    display: inline-block;
    border: 1px solid #555;
    border-radius: 4px;
    height: 24px;
    margin-right: 8px;
    pointer-events: none;
    width: 24px;
  }

  .checkbox:after {
    content: '✔';
    color: #0080c6;
    left: 10px;
    top: 4px;
    pointer-events: none;
    position: absolute;
  }

  .medium-editor-element p {
    margin: 0;
  }
</style>
