this["LeaguePress"] = this["LeaguePress"] || {};

this["LeaguePress"]["champion.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "";
  buffer += "\n                    <td class=\"header\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</td>\n                    ";
  return buffer;
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n                <tr>\n                    <td data-champion-code=\"\" class=\"champions-icon champions-";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.cssCode || depth1.cssCode),stack1 ? stack1.call(depth0, ((stack1 = depth1.champion),stack1 == null || stack1 === false ? stack1 : stack1.code), options) : helperMissing.call(depth0, "cssCode", ((stack1 = depth1.champion),stack1 == null || stack1 === false ? stack1 : stack1.code), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "-";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.cssCode || depth0.cssCode),stack1 ? stack1.call(depth0, depth0.code, options) : helperMissing.call(depth0, "cssCode", depth0.code, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n                        &nbsp;\n                    </td>\n                    ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.ifPassive || depth0.ifPassive),stack1 ? stack1.call(depth0, depth0.type, depth1.slots, options) : helperMissing.call(depth0, "ifPassive", depth0.type, depth1.slots, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </tr>\n                ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "\n                    <td class=\"champion-ability-passive\">&nbsp;</td>\n                    ";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    ";
  stack1 = helpers.each.call(depth0, depth0.slots, {hash:{},inverse:self.noop,fn:self.programWithDepth(10, program10, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program10(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n                    <td class=\"champion-ability\" data-ability=\""
    + escapeExpression(((stack1 = ((stack1 = depth1.ability),stack1 == null || stack1 === false ? stack1 : stack1.code)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-slot=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</td>\n                    ";
  return buffer;
  }

  buffer += "<div class=\"champion-widget\">\n    <div class=\"top\"></div>\n    <div class=\"middle\">\n        <div class=\"champion-header\">\n            <div style=\"float:left\" data-champion-code=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.code)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n                 class=\"champions-icon champions-";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.cssCode || depth0.cssCode),stack1 ? stack1.call(depth0, ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.code), options) : helperMissing.call(depth0, "cssCode", ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.code), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"></div>\n        </div>\n        <div class=\"champion-stats\">\n            <table>\n                <tr>\n                    <td style=\"width: 240px\">\n                        <ul>\n                            <li>\n                                <span class=\"attack-damage-tiny\"></span>\n                                <span class=\"label\">Attack Damage</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.attackDamage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n                            <li>\n                                <span class=\"ability-power-tiny\"></span>\n                                <span class=\"label\">Ability Power</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.abilityPower)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n                            <li>\n                                <span class=\"attack-speed-tiny\"></span>\n                                <span class=\"label\">Attack Speed</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.attackSpeed)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n                            <li>\n                                <span class=\"movement-speed-tiny\"></span>\n                                <span class=\"label\">Movement Speed</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.movementSpeed)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n                            <li>\n                                <span class=\"armor-tiny\"></span>\n                                <span class=\"label\">Armor</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.armor)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n                            <li>\n                                <span class=\"magic-resist-tiny\"></span>\n                                <span class=\"label\">Magic Resist</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.magicResistance)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n                        </ul>\n                    </td>\n                    <td style=\"width: 240px\">\n                        <ul>\n                            <li>\n                                <span class=\"label\">Attack Rating</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.attackRating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n                            <li>\n                                <span class=\"label\">Spells Rating</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.healthRating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n                            <li>\n                                <span class=\"label\">Health Rating</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.healthRating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n\n                            <li>\n                                <span class=\"label\">Difficulty Rating</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.difficultyRating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n                            <li>\n                                <span class=\"label\">Health</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.health)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n                            <li>\n                                <span class=\"label\">Mana</span>\n                                <span class=\"stat\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.mana)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </li>\n                        </ul>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"champion-abilities\">\n            <table>\n                <tr>\n                    <td>\n                        &nbsp;\n                    </td>\n                    ";
  stack2 = helpers.each.call(depth0, depth0.slots, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </tr>\n                ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.champion),stack1 == null || stack1 === false ? stack1 : stack1.abilities), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </table>\n        </div>\n    </div>\n    <div class=\"bottom\"></div>\n</div>";
  return buffer;
  });

this["LeaguePress"]["champion_info.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>";
  if (stack1 = helpers.shortName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shortName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  });

this["LeaguePress"]["champion_summonerspells.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            <li>\n                <div data-summonerspell-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-summonerspell-code=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"\n                     class=\"summonerspells-icon summonerspells-";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.cssCode || depth0.cssCode),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "cssCode", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"></div>\n            </li>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"spells-widget\">\n    <ul class=\"list\">\n        ";
  stack1 = helpers.each.call(depth0, depth0.summonerspells, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>";
  return buffer;
  });

this["LeaguePress"]["item_info.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>";
  if (stack1 = helpers.shortName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shortName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  });

this["LeaguePress"]["items_build.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"itemset\" data-itemset-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            <div class=\"title\">\n                <input type=\"text\" name=\"title\" value=\"";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"/>\n            </div>\n            <ul>\n                ";
  stack2 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </ul>\n            <div class=\"itemset-remove\">\n                <span style=\"width: 12px;\" class=\"glyphicon glyphicon-remove\"></span>\n            </div>\n        </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <li>\n                        ";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </li>\n                ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n                            <div data-item-code=\""
    + escapeExpression(((stack1 = depth0.code),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n                                 data-item-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n                                 class=\"items-icon items-";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.cssCode || depth0.cssCode),stack1 ? stack1.call(depth0, depth0.code, options) : helperMissing.call(depth0, "cssCode", depth0.code, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n                                &nbsp;\n                            </div>\n                            <div class=\"item-remove\">\n                                <span style=\"width: 12px;\" class=\"glyphicon glyphicon-remove\"></span>\n                            </div>\n                            ";
  stack2 = helpers['if'].call(depth0, depth0.isMultiple, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                <div class=\"item-add\">\n                                    <span style=\"width: 12px;\" class=\"glyphicon glyphicon-plus\"></span>\n                                </div>\n                                <div class=\"item-amount\">\n                                    "
    + escapeExpression(((stack1 = depth0.amount),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                                </div>\n                            ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <div data-item-code=\"\"\n                                 data-item-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n                                 class=\"items-please-select\">\n                                &nbsp;\n                            </div>\n                        ";
  return buffer;
  }

  buffer += "<div class=\"items-widget\">\n    <ul class=\"menu\">\n        <li>\n            <div class=\"items-show\">[Show Items]</div>\n        </li>\n        <li>\n            <div class=\"itemset-add\">[Add ItemSet]</div>\n        </li>\n    </ul>\n    ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.itemsbuild),stack1 == null || stack1 === false ? stack1 : stack1.itemSets), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>";
  return buffer;
  });

this["LeaguePress"]["league_select.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            <li>\n                <div data-"
    + escapeExpression(((stack1 = depth1.singularName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-"
    + escapeExpression(((stack1 = depth1.singularName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-code=\""
    + escapeExpression(((stack1 = depth0.code),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n                     class=\""
    + escapeExpression(((stack1 = depth1.pluralName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-icon "
    + escapeExpression(((stack1 = depth1.pluralName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.cssCode || depth0.cssCode),stack1 ? stack1.call(depth0, depth0.code, options) : helperMissing.call(depth0, "cssCode", depth0.code, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"></div>\n            </li>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"leaguepress-ui-select\">\n    <div class=\"ui-options\">\n        <span style=\"width: 366px;\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        <span style=\"width: 12px;\" class=\"glyphicon glyphicon-move\"></span>\n        <span style=\"width: 12px;\" class=\"glyphicon glyphicon-remove\"></span>\n    </div>\n    <div class=\"ui-filter\">\n        <input type=\"text\" name=\"filter\"/>\n    </div>\n    <ul class=\"ui-list\">\n        ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>";
  return buffer;
  });

this["LeaguePress"]["masteries_build.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <div class=\"tree-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " masteries-tree\">\n        <div class=\"title\">";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  if (stack2 = helpers.treeTotal) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.treeTotal; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n        ";
  stack2 = helpers.each.call(depth0, depth0.tiers, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"tier-";
  if (stack1 = helpers.tierNumber) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tierNumber; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " masteries-tier\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.masteries, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, depth0.code, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, depth0.isDisabled, {hash:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            <div data-mastery-code=\"";
  if (stack1 = helpers.code) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.code; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.shortName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shortName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n                 class=\"mastery-";
  if (stack1 = helpers.masteryNumber) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.masteryNumber; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " masteries-icon masteries-icon-disabled masteries-";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.cssCode || depth0.cssCode),stack1 ? stack1.call(depth0, depth0.code, options) : helperMissing.call(depth0, "cssCode", depth0.code, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n                &nbsp;\n                <div class=\"masteries-rank\"><span data-mastery-rank=\"";
  if (stack2 = helpers.rank) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rank; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.rank) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rank; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span><span>/";
  if (stack2 = helpers.maxRank) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.maxRank; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div>\n            </div>\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            <div data-mastery-code=\"";
  if (stack1 = helpers.code) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.code; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.shortName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shortName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n                 class=\"mastery-";
  if (stack1 = helpers.masteryNumber) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.masteryNumber; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " masteries-icon masteries-";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.cssCode || depth0.cssCode),stack1 ? stack1.call(depth0, depth0.code, options) : helperMissing.call(depth0, "cssCode", depth0.code, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n                &nbsp;\n                <div class=\"masteries-rank\"><span data-mastery-rank=\"";
  if (stack2 = helpers.rank) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rank; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.rank) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rank; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span><span>/";
  if (stack2 = helpers.maxRank) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.maxRank; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div>\n            </div>\n            ";
  return buffer;
  }

  buffer += "<div class=\"masteries-widget\">\n    ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.masteriesbuild),stack1 == null || stack1 === false ? stack1 : stack1.trees), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>";
  return buffer;
  });

this["LeaguePress"]["rune_info.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>";
  if (stack1 = helpers.shortName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shortName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  });

this["LeaguePress"]["runes_build.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n        <li data-rune-code=\""
    + escapeExpression(((stack1 = depth0.code),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            <table>\n                <tr>\n                    <td>"
    + escapeExpression(((stack1 = depth0.amount),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "x</td>\n                    <td>\n                        <div data-rune-code=\""
    + escapeExpression(((stack1 = depth0.code),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n                             class=\"runes-icon runeicons-";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.cssCode || depth0.cssCode),stack1 ? stack1.call(depth0, depth0.iconCode, options) : helperMissing.call(depth0, "cssCode", depth0.iconCode, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n                        </div>\n                    </td>\n                    <td>\n                        "
    + escapeExpression(((stack1 = depth0.shortName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                    </td>\n                    <td>\n                        <ul>\n                            <li><span style=\"width: 12px;\" class=\"glyphicon glyphicon-plus add-rune\"></span></li>\n                            <li><span style=\"width: 12px;\" class=\"glyphicon glyphicon-minus remove-rune\"></span></li>\n                        </ul>\n                    </td>\n                </tr>\n            </table>\n        </li>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"runes-widget\">\n    <ul class=\"menu\">\n        <li>\n            <div class=\"runes-show\">[Show Runes]</div>\n        </li>\n    </ul>\n    <ul class=\"list\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = ((stack1 = depth0.runesbuild),stack1 == null || stack1 === false ? stack1 : stack1.runes)),stack1 == null || stack1 === false ? stack1 : stack1.mark), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = ((stack1 = depth0.runesbuild),stack1 == null || stack1 === false ? stack1 : stack1.runes)),stack1 == null || stack1 === false ? stack1 : stack1.glyph), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = ((stack1 = depth0.runesbuild),stack1 == null || stack1 === false ? stack1 : stack1.runes)),stack1 == null || stack1 === false ? stack1 : stack1.seal), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = ((stack1 = depth0.runesbuild),stack1 == null || stack1 === false ? stack1 : stack1.runes)),stack1 == null || stack1 === false ? stack1 : stack1.quintessence), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </ul>\n</div>";
  return buffer;
  });

this["LeaguePress"]["runes_select.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            <li>\n                <table>\n                    <tr>\n                        <td class=\"icon\">\n                            <div data-rune-code=\""
    + escapeExpression(((stack1 = depth0.code),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n                                 class=\"runes-icon runeicons-";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.cssCode || depth0.cssCode),stack1 ? stack1.call(depth0, depth0.iconCode, options) : helperMissing.call(depth0, "cssCode", depth0.iconCode, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"></div>\n                        </td>\n                        <td class=\"description\">"
    + escapeExpression(((stack1 = depth0.shortName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                    </tr>\n                </table>\n            </li>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"leaguepress-ui-select\">\n    <div class=\"ui-options\">\n        <span style=\"width: 366px;\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        <span style=\"width: 12px;\" class=\"glyphicon glyphicon-move\"></span>\n        <span style=\"width: 12px;\" class=\"glyphicon glyphicon-remove\"></span>\n    </div>\n    <div class=\"ui-filter\">\n        <input type=\"text\" name=\"filter\"/>\n    </div>\n    <ul class=\"ui-list-runes\">\n        ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>\n";
  return buffer;
  });

this["LeaguePress"]["summonerspell_info.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>";
  if (stack1 = helpers.shortName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shortName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  });