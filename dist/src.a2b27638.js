// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
////////////////////////////
// DO NOT EDIT THIS ARRAY //
////////////////////////////
/*
 The contacts array contain the list of contacts for the contact book.
*/
window.contacts = [{
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  picture: "https://via.placeholder.com/150/008600/FFFFFF?text=LG",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Green Vale",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}, {
  id: 2,
  name: "Ervin Howell",
  email: "Shanna@melissa.tv",
  picture: "https://via.placeholder.com/150/0000FF/FFFFFF?text=EH",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Blue Vale",
    zipcode: "90566-7771",
    geo: {
      lat: "-43.9509",
      lng: "-34.4618"
    }
  },
  phone: "010-692-6593 x09125",
  website: "anastasia.net",
  company: {
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains"
  }
}, {
  id: 3,
  name: "Clementine Bauch",
  email: "Nathan@yesenia.net",
  picture: "https://via.placeholder.com/150/34F500/FFFFFF?text=CB",
  address: {
    street: "Douglas Extension",
    suite: "Suite 847",
    city: "Green Vale",
    zipcode: "59590-4157",
    geo: {
      lat: "-68.6102",
      lng: "-47.0653"
    }
  },
  phone: "1-463-123-4447",
  website: "ramiro.info",
  company: {
    name: "Romaguera-Jacobson",
    catchPhrase: "Face to face bifurcated interface",
    bs: "e-enable strategic applications"
  }
}, {
  id: 4,
  name: "Patricia Lebsack",
  email: "Julianne.OConner@kory.org",
  picture: "https://via.placeholder.com/150/008600/FFFFFF?text=PL",
  address: {
    street: "Hoeger Mall",
    suite: "Apt. 692",
    city: "South Vale",
    zipcode: "53919-4257",
    geo: {
      lat: "29.4572",
      lng: "-164.2990"
    }
  },
  phone: "493-170-9623 x156",
  website: "kale.biz",
  company: {
    name: "Robel-Corkery",
    catchPhrase: "Multi-tiered zero tolerance productivity",
    bs: "transition cutting-edge web services"
  }
}, {
  id: 5,
  name: "Chelsey Dietrich",
  email: "Lucio_Hettinger@annie.ca",
  picture: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=CD",
  address: {
    street: "Skiles Walks",
    suite: "Suite 351",
    city: "North Vale",
    zipcode: "33263",
    geo: {
      lat: "-31.8129",
      lng: "62.5342"
    }
  },
  phone: "(254)954-1289",
  website: "demarco.info",
  company: {
    name: "Keebler LLC",
    catchPhrase: "User-centric fault-tolerant solution",
    bs: "revolutionize end-to-end systems"
  }
}, {
  id: 6,
  name: "Mrs. Dennis Schulist",
  email: "Karley_Dach@jasper.info",
  picture: "https://via.placeholder.com/150/000086/FFFFFF?text=DS",
  address: {
    street: "Norberto Crossing",
    suite: "Apt. 950",
    city: "South Vale",
    zipcode: "23505-1337",
    geo: {
      lat: "-71.4197",
      lng: "71.7478"
    }
  },
  phone: "1-477-935-8478 x6430",
  website: "ola.org",
  company: {
    name: "Considine-Lockman",
    catchPhrase: "Synchronised bottom-line interface",
    bs: "e-enable innovative applications"
  }
}, {
  id: 7,
  name: "Kurtis Weissnat",
  email: "Telly.Hoeger@billy.biz",
  picture: "https://via.placeholder.com/150/860000/FFFFFF?text=KW",
  address: {
    street: "Rex Trail",
    suite: "Suite 280",
    city: "Blue Vale",
    zipcode: "58804-1099",
    geo: {
      lat: "24.8918",
      lng: "21.8984"
    }
  },
  phone: "210.067.6132",
  website: "elvis.io",
  company: {
    name: "Johns Group",
    catchPhrase: "Configurable multimedia task-force",
    bs: "generate enterprise e-tailers"
  }
}, {
  id: 8,
  name: "Nicholas Runolfsdottir V",
  email: "Sherwood@rosamond.me",
  picture: "https://via.placeholder.com/150/FF0000/FFFFFF?text=NR",
  address: {
    street: "Ellsworth Summit",
    suite: "Suite 729",
    city: "Green Vale",
    zipcode: "45169",
    geo: {
      lat: "-14.3990",
      lng: "-120.7677"
    }
  },
  phone: "586.493.6943 x140",
  website: "jacynthe.com",
  company: {
    name: "Abernathy Group",
    catchPhrase: "Implemented secondary concept",
    bs: "e-enable extensible e-tailers"
  }
}, {
  id: 9,
  name: "Glenna Reichert",
  email: "Chaim_McDermott@dana.io",
  picture: "https://via.placeholder.com/150/226688/FFFFFF?text=GR",
  address: {
    street: "Dayna Park",
    suite: "Suite 449",
    city: "White Vale",
    zipcode: "76495-3109",
    geo: {
      lat: "24.6463",
      lng: "-168.8889"
    }
  },
  phone: "(775)976-6794 x41206",
  website: "conrad.com",
  company: {
    name: "Yost and Sons",
    catchPhrase: "Switchable contextually-based project",
    bs: "aggregate real-time technologies"
  }
}, {
  id: 10,
  name: "Clementina DuBuque",
  email: "Rey.Padberg@karina.biz",
  picture: "https://via.placeholder.com/150/000000/FFFFFF?text=CD",
  address: {
    street: "Kattie Turnpike",
    suite: "Suite 198",
    city: "Blue Vale",
    zipcode: "31428-2261",
    geo: {
      lat: "-38.2386",
      lng: "57.2232"
    }
  },
  phone: "024-648-3804",
  website: "ambrose.net",
  company: {
    name: "Hoeger LLC",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models"
  }
}];

///////////////////////////////////
// WRITE YOUR SOLUTION CODE HERE //
///////////////////////////////////
// console.log("hello!")
/*
 Create and return the HTML to render a single contact card.
 The `contact` parameter is an object representing a single contact. 
*/
function renderContact() {
  var contact = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var id = contact.id,
    name = contact.name,
    email = contact.email,
    picture = contact.picture,
    address = contact.address,
    phone = contact.phone,
    website = contact.website,
    company = contact.company;
  var contactHTML = "\n  <div class=\"card\" data-id=\"".concat(id, "\">\n  <button class=\"deleteBtn\" title=\"Delete this contact\">X</button>\n  <div class=\"avatar\">\n    <div class=\"circle\"></div>\n    <div class=\"circle\"></div>\n    <img src=\"").concat(picture, "\"/>\n  </div>\n  <div class=\"info\">\n    <span class=\"name big\">").concat(name, "</span>\n    <span class=\"email small\">").concat(email, "</span>\n  </div>\n  <div class=\"details\">\n    <div class=\"phone\">").concat(phone, "</div>\n    <div class=\"website\">").concat(website, "</div>\n  </div>\n\n  <div class=\"additional\">\n    <div class=\"address\">\n      <div class=\"suite\">").concat(address.suite, "</div>\n      <div class=\"street\">").concat(address.street, "</div>\n      <div class=\"city\">").concat(address.city, ", ").concat(address.zipcode, "</div>\n    </div>\n    <div class=\"company\">\n      <div class=\"label\">Works at</div>\n      <div class=\"company-name\">").concat(company.name, "</div>\n    </div>\n  </div>\n</div>\n");
  return contactHTML;
}
;

/*
  Render the array of contacts and insert them on the DOM.
  The contacts should be rendered in the `section` with id "contacts".
*/
function render(contacts) {
  //loop through the contacts array. for each contact, get the html generated for it
  var contactsHTMLArray = contacts.map(function (contact) {
    var contactHTML = renderContact(contact);
    return contactHTML;
  });
  //select contacts section where contact card html will be appened

  var contactsSection = document.querySelector("#contacts");
  //append contactsHTMLArray to contacts section
  contactsSection.innerHTML = contactsHTMLArray;
  loadCities(window.contacts);
  deleteButtonHandler();
}

/*
  Filter by city. Filter the  array of contacts by the given city.
  Return a new array containing the filtered list. 
  Do NOT modify the original array.
*/
function filterByCity() {
  var city = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var filteredContacts = window.contacts.filter(function (contact) {
    return contact.address.city === city;
  });
  return filteredContacts;
}

/*
  Add an `change` event listener to the `filterOptions` select element.
  On `change` get the value selected by the user. 
  If the value is "0" call `render()` with the complete contacts list.
  If the value is not "0" call `filterByCity()` passing the value selected by
  the user. Then call `render()` with the filtered list.
*/
function filterHandler() {
  var filterSelect = document.querySelector("#filterOptions");
  filterSelect.addEventListener("change", function (event) {
    if (event.target.value === 0) {
      render(window.contacts);
    } else {
      var filteredContacts = filterByCity(event.target.value);
      render(filteredContacts);
    }
  });
}

/*
  Accepts an array of contacts.
  Populate the select with id `filterOptions` with the list of cities.
  Create a list of cities from the contacts array with no duplicates then
  add an `<option>` element for each city to the select.
*/
function loadCities() {
  var contacts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  //get only the city names from the contact array

  arrayOfCitiesOnly = contacts.map(function (contact) {
    return contact.address.city;
  });
  // from the array of city names, put only unique names into the array
  var uniqueCities = [];
  arrayOfCitiesOnly.forEach(function (city) {
    if (!uniqueCities.includes(city)) {
      uniqueCities.push(city);
    }
  });
  // generate an array with properly formatted option tags from uniqueCities array
  var arrayOfOptionTagsHTML = uniqueCities.map(function (city) {
    return "<option value=\"".concat(city, "\">").concat(city, "</option>");
  });

  // console.log(arrayOfOptionTagsHTML)
  var selectTag = document.querySelector("#filterOptions");

  //clear selectTag out before putting cities in
  var baseOption = "<option value=\"0\">-- Select a city --</option>";
  selectTag.innerHTML = baseOption;
  selectTag.innerHTML += arrayOfOptionTagsHTML;
}

/*
  Remove the contact from the contact list with the given id.
*/
function deleteContact(id) {
  //find which index the element is in
  var indexOfContactToDelete = window.contacts.findIndex(function (contact) {
    return contact.id === Number(id);
  });
  //remove it from the array
  if (indexOfContactToDelete >= 0) {
    window.contacts.splice(indexOfContactToDelete, 1);
  }
}

/*
  Add a `click` event handler to the `deleteBtn` elements.
  When clicked, get the id of the card that was clicked from the 
  corresponding `data-id` then call `deleteContact()` and re-render 
  the list.
*/
function deleteButtonHandler() {
  var allDeleteButtons = document.querySelectorAll(".deleteBtn");
  allDeleteButtons.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function (event) {
      var idOfPersonToDelete = event.target.parentNode.getAttribute("data-id");
      deleteContact(idOfPersonToDelete);
      //console.log("delete button clicked", event.target.parentNode.getAttribute("data-id"));
      render(window.contacts);
    });
  });
}

/*
  Perform all startup tasks here. Use this function to attach the 
  required event listeners, call loadCities() then call render().
*/
function main() {
  // loadCities(contacts);

  render(window.contacts);
  filterHandler();
}
;
window.addEventListener("DOMContentLoaded", main);

//////////////////////////////////////////
// DO NOT EDIT ANYTHING BELOW THIS LINE //
//////////////////////////////////////////
window.contacts = contacts;
window.renderContact = renderContact;
window.render = render;
window.filterByCity = filterByCity;
window.filterHandler = filterHandler;
window.loadCities = loadCities;
window.deleteContact = deleteContact;
window.deleteButtonHandler = deleteButtonHandler;
window.main = main;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35927" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map