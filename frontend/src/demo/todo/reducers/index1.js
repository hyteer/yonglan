import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'
//const { SHOW_ALL } = VisibilityFilters
const { SHOW_ALL } = VisibilityFilters

// Utils,输出对象结构
var MAX_DUMP_DEPTH = 10;
function dumpObj(obj, name, indent, depth) {
  if (depth > MAX_DUMP_DEPTH) {
    return indent + name + ": <Maximum Depth Reached>\n";
  }
  if (typeof obj == "object") {
    var child = null;
    var output = indent + name + "\n";
    indent += "\t";
    for (var item in obj) {
      try {
        child = obj[item];
      } catch (e) {
        child = "<Unable to Evaluate>";
      }
      if (typeof child == "object") {
        output += dumpObj(child, item, indent, depth + 1);
      } else {
        output += indent + item + ": " + child + "\n";
      }
    }
    return output;
  } else {
    return obj;
  }
}

// -----END---------

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      console.log("Action:toggle todo...")
      var obj_str = dumpObj(state)
      console.log("Todo:"+obj_str)
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
