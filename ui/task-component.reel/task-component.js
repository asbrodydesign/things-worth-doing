/**
 * @module ui/task-component.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class TaskComponent
 * @extends Component
 */
exports.TaskComponent = Component.specialize(/** @lends TaskComponent# */ {
    constructor: {
        value: function TaskComponent() {
            this.super();
        }
    }
});
