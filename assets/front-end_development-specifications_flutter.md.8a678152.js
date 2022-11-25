import{_ as s,c as n,o as a,b as l}from"./app.1fdc3742.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76EE\u5F55\u7ED3\u6784","slug":"\u76EE\u5F55\u7ED3\u6784","link":"#\u76EE\u5F55\u7ED3\u6784","children":[]},{"level":2,"title":"\u5BF9\u5E94\u6587\u4EF6\u5939\u4F5C\u7528\u4EE5\u53CA\u547D\u540D\u89C4\u8303\u5EFA\u8BAE","slug":"\u5BF9\u5E94\u6587\u4EF6\u5939\u4F5C\u7528\u4EE5\u53CA\u547D\u540D\u89C4\u8303\u5EFA\u8BAE","link":"#\u5BF9\u5E94\u6587\u4EF6\u5939\u4F5C\u7528\u4EE5\u53CA\u547D\u540D\u89C4\u8303\u5EFA\u8BAE","children":[]},{"level":2,"title":"configs:\u8D1F\u8D23\u914D\u7F6E\u6587\u4EF6\u7684\u7EDF\u4E00\u7BA1\u7406","slug":"configs-\u8D1F\u8D23\u914D\u7F6E\u6587\u4EF6\u7684\u7EDF\u4E00\u7BA1\u7406","link":"#configs-\u8D1F\u8D23\u914D\u7F6E\u6587\u4EF6\u7684\u7EDF\u4E00\u7BA1\u7406","children":[]},{"level":2,"title":"l10n:\u8D1F\u8D23\u591A\u8BED\u8A00\u914D\u7F6E","slug":"l10n-\u8D1F\u8D23\u591A\u8BED\u8A00\u914D\u7F6E","link":"#l10n-\u8D1F\u8D23\u591A\u8BED\u8A00\u914D\u7F6E","children":[]},{"level":2,"title":"models:\u8D1F\u8D23\u670D\u52A1\u5668\u6570\u636E\u89E3\u6790","slug":"models-\u8D1F\u8D23\u670D\u52A1\u5668\u6570\u636E\u89E3\u6790","link":"#models-\u8D1F\u8D23\u670D\u52A1\u5668\u6570\u636E\u89E3\u6790","children":[]},{"level":2,"title":"resources:\u8D1F\u8D23\u5BBD\u9AD8\u95F4\u8DDD\u7B49\u7684\u914D\u7F6E\u4EE5\u53CA\u5B57\u4F53\u5927\u5C0F\u7684\u914D\u7F6E","slug":"resources-\u8D1F\u8D23\u5BBD\u9AD8\u95F4\u8DDD\u7B49\u7684\u914D\u7F6E\u4EE5\u53CA\u5B57\u4F53\u5927\u5C0F\u7684\u914D\u7F6E","link":"#resources-\u8D1F\u8D23\u5BBD\u9AD8\u95F4\u8DDD\u7B49\u7684\u914D\u7F6E\u4EE5\u53CA\u5B57\u4F53\u5927\u5C0F\u7684\u914D\u7F6E","children":[]}],"relativePath":"front-end/development-specifications/flutter.md","lastUpdated":1669354234000}'),e={name:"front-end/development-specifications/flutter.md"},p=l(`<h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">lib:</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  generated_plugin_registrant.dart//\u7F16\u8BD1\u5668\u81EA\u52A8\u751F\u6210\u7684\u7B2C\u4E09\u65B9\u63D2\u4EF6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  main.dart //\u5165\u53E3\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500activitys//\u8D1F\u8D23ui\u7684\u5E03\u5C40(\u6BCF\u4E2A\u754C\u9762\u4EE5\u53CA\u76EE\u5F55\u4E0Econtrollers\u76F8\u5BF9\u5E94)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  main_activity.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  new_base_activity.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  splash_activity.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500fragments //activity\u5185\u5B50\u754C\u9762\u5E03\u5C40</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502      new_base_fragment.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502      </span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500views //\u9875\u9762\u5185\u5E38\u7528\u5230\u7684\u5E03\u5C40</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502      version_update_tips_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502      </span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500items //\u6ED1\u52A8\u5217\u8868\u4E0B\u590D\u7528view\u7684\u5E03\u5C40</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502                   </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500configs //\u914D\u7F6E\u6587\u4EF6\u7EDF\u4E00\u7BA1\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      app_config.dart //\u5168\u5C40\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      assets_config.dart//\u56FE\u7247\u5B57\u4F53\u8D44\u6E90\u8DEF\u5F84\u7B49\u7684\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      font_config.dart //\u5B57\u4F53\u98CE\u683C\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      key_config.dart//\u7F13\u5B58\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      response_config.dart//\u7F51\u7EDC\u6570\u636E\u89E3\u6790\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      router_config.dart//\u8DEF\u7531\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      url_config.dart//\u7F51\u7EDC\u8BF7\u6C42\u8DEF\u5F84\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500controllers //ui\u5BF9\u5E94\u7684\u63A7\u5236\u5668\uFF0C\u8D1F\u8D23\u903B\u8F91\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  main_activity_controller.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  splash_activity_controller.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500extra  //\u5168\u5C40\u63A7\u5236\u5668\u914D\u7F6E\uFF0C\u6BD4\u5982\u4E3B\u9898\uFF0C\u8BED\u8A00\u7B49\u53EF\u4EE5\u653E\u5728\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          application_controller.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500generated  //\u591A\u8BED\u8A00\u81EA\u52A8\u751F\u6210\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  l10n.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500intl</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          messages_all.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          messages_en.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500l10n //\u591A\u8BED\u8A00\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      intl_en.arb</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500models //\u8D1F\u8D23\u670D\u52A1\u5668\u6570\u636E\u89E3\u6790</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  user_info.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  user_info.g.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500extra //\u975E\u7F51\u7EDC\u8BF7\u6C42\u6570\u636E\u7C7B\u578B\u7684\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502      key_value.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502      </span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500response  //\u7F51\u7EDC\u8BF7\u6C42\u89E3\u6790\u7684\u81EA\u52A8\u751F\u6210\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          login_response_data.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          login_response_data.g.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500resources //\u8D44\u6E90\u6587\u4EF6\u7684\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      dimens.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      s_colors.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500utils  //\u5E38\u7528\u5E03\u5C40\u5DE5\u5177\u7C7B\u7684\u5C01\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      keyboard_util.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      navigator_util.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      network_util.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      string_util.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      view_util.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      </span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500widgets  //\u5E38\u7528ui\u7EC4\u4EF6\u7684\u5C01\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  clear_over_scroll_behavior_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  keep_alive_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  material_inkwell_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  pull_refresh_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500loading_dialog //loading\u63D0\u793A\u6846\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      loading_dialog_controller.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      loading_dialog_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      loading_indicator.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500normal  //\u4E00\u4E9B\u5E38\u7528\u7EC4\u4EF6\u7684\u5C01\u88C5\uFF0C\u7EDF\u4E00\u8C03\u7528normal\u5185\u7684\u53EF\u4EE5\u65B9\u4FBF\u7BA1\u7406\u4EE5\u53CA\u914D\u7F6E\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      normal_button_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      normal_choose_list_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      normal_image_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      normal_input_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      normal_network_image_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      normal_popup_route.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      normal_popup_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      normal_stateful_text_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      normal_stateful_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      normal_tab_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502      normal_text_view.dart</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5BF9\u5E94\u6587\u4EF6\u5939\u4F5C\u7528\u4EE5\u53CA\u547D\u540D\u89C4\u8303\u5EFA\u8BAE" tabindex="-1">\u5BF9\u5E94\u6587\u4EF6\u5939\u4F5C\u7528\u4EE5\u53CA\u547D\u540D\u89C4\u8303\u5EFA\u8BAE <a class="header-anchor" href="#\u5BF9\u5E94\u6587\u4EF6\u5939\u4F5C\u7528\u4EE5\u53CA\u547D\u540D\u89C4\u8303\u5EFA\u8BAE" aria-hidden="true">#</a></h2><ul><li><code>activitys</code> \u8D1F\u8D23ui\u7684\u5E03\u5C40(\u6BCF\u4E2A\u754C\u9762\u4EE5\u53CA\u76EE\u5F55\u4E0E <code>controllers</code> \u76F8\u5BF9\u5E94)</li><li>\u4E00\u4E2A\u9875\u9762\u5185\u591A\u4E2A\u5B50\u9875\u9762\u5EFA\u8BAE\u653E\u5728 <code>fragments</code> \u5185\uFF0C\u6BCF\u4E00\u4E2A <code>fragment</code> \u540C\u6837\u5BF9\u5E94\u4E00\u4E2A <code>controller</code> \uFF0C\u547D\u540D\u65F6\u5019\u52A0\u4E0A\u5BF9\u5E94\u754C\u9762\u7684 <code>activtiy</code> \u524D\u7F00\u65B9\u4FBF\u67E5\u627E\u5B9A\u4F4D <ul><li>(\u5982: <code>fragments/main_activity_fragment_my.dart</code>\uFF0C\u540C\u65F6\u5BF9\u5E94\u4E00\u4E2A <code>main_activity_fragment_my_controller.dart</code> \u8D1F\u8D23\u903B\u8F91\u5904\u7406)</li></ul></li><li>\u4E00\u4E9B\u4E0E\u9875\u9762\u76F8\u5173\u7684\u7EC4\u4EF6\u53EF\u4EE5\u653E\u5728 <code>views</code> \u5185\uFF0C\u5982\u679C\u9875\u9762\u5185\u5B58\u5728\u590D\u7528\u5E03\u5C40\uFF0C\u53EF\u4EE5\u628A\u4ED6\u4EEC\u90FD\u653E\u5230 <code>items</code> \u76EE\u5F55\u4E0B\uFF0C\u547D\u540D\u4E0E\u5BF9\u5E94\u7684 <code>activity</code> \u6216\u8005 <code>fragment</code> \u5BF9\u5E94 <ul><li>(\u5982: <code>items/main_activity_fragment_home_meeting_view_item.dart</code> \u8D1F\u8D23\u590D\u7528\u63A7\u4EF6\u7684\u5E03\u5C40)</li></ul></li></ul><h2 id="configs-\u8D1F\u8D23\u914D\u7F6E\u6587\u4EF6\u7684\u7EDF\u4E00\u7BA1\u7406" tabindex="-1">configs:\u8D1F\u8D23\u914D\u7F6E\u6587\u4EF6\u7684\u7EDF\u4E00\u7BA1\u7406 <a class="header-anchor" href="#configs-\u8D1F\u8D23\u914D\u7F6E\u6587\u4EF6\u7684\u7EDF\u4E00\u7BA1\u7406" aria-hidden="true">#</a></h2><ul><li><code>assets_config.dart</code> \u8D1F\u8D23\u56FE\u7247\u5B57\u4F53\u56FE\u6807\u8D44\u6E90\u7684\u914D\u7F6E</li><li><code>key_config.dart</code> \u8D1F\u8D23\u7F13\u5B58\u6587\u4EF6\u7684\u914D\u7F6E</li><li><code>response_config.dart</code> \u8D1F\u8D23\u6587\u4EF6\u89E3\u6790\u7C7B\u578B\u7684\u652F\u6301\uFF0C\u5B9A\u4E49\u597D\u5BF9\u5E94\u7684 <code>model</code> \u540E\uFF0C\u9700\u8981\u5728\u8BE5\u6587\u4EF6\u5185\u8FDB\u884C\u58F0\u660E\u6CE8\u518C</li><li><code>router_config.dart</code> \u8D1F\u8D23\u8DEF\u7531\u7684\u914D\u7F6E</li><li><code>url_config.dart</code> \u8D1F\u8D23\u670D\u52A1\u5668\u8BF7\u6C42\u7684\u914D\u7F6E</li></ul><h2 id="l10n-\u8D1F\u8D23\u591A\u8BED\u8A00\u914D\u7F6E" tabindex="-1">l10n:\u8D1F\u8D23\u591A\u8BED\u8A00\u914D\u7F6E <a class="header-anchor" href="#l10n-\u8D1F\u8D23\u591A\u8BED\u8A00\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li>\u9879\u76EE\u4E2D\u7528\u5230\u7684\u8BED\u8A00\u5EFA\u8BAE\u7EDF\u4E00\u5199\u5230\u8FD9\u91CC</li></ul><h2 id="models-\u8D1F\u8D23\u670D\u52A1\u5668\u6570\u636E\u89E3\u6790" tabindex="-1">models:\u8D1F\u8D23\u670D\u52A1\u5668\u6570\u636E\u89E3\u6790 <a class="header-anchor" href="#models-\u8D1F\u8D23\u670D\u52A1\u5668\u6570\u636E\u89E3\u6790" aria-hidden="true">#</a></h2><ul><li>\u5B9A\u4E49\u597D\u6570\u636E\u683C\u5F0F\u540E\u6267\u884C\u751F\u4EA7.g\u6587\u4EF6</li><li><code>model</code> \u6587\u4EF6\u53D8\u5316\u540E\u81EA\u52A8\u751F\u6210</li></ul><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">flutter packages pub run build_runner build</span></span>
<span class="line"><span style="color:#A6ACCD;">flutter packages pub run build_runner watch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="resources-\u8D1F\u8D23\u5BBD\u9AD8\u95F4\u8DDD\u7B49\u7684\u914D\u7F6E\u4EE5\u53CA\u5B57\u4F53\u5927\u5C0F\u7684\u914D\u7F6E" tabindex="-1">resources:\u8D1F\u8D23\u5BBD\u9AD8\u95F4\u8DDD\u7B49\u7684\u914D\u7F6E\u4EE5\u53CA\u5B57\u4F53\u5927\u5C0F\u7684\u914D\u7F6E <a class="header-anchor" href="#resources-\u8D1F\u8D23\u5BBD\u9AD8\u95F4\u8DDD\u7B49\u7684\u914D\u7F6E\u4EE5\u53CA\u5B57\u4F53\u5927\u5C0F\u7684\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li><code>dimens.dart</code> \u8D1F\u8D23\u8DDD\u79BB\u914D\u7F6E</li><li><code>s_colors.dart</code> \u8D1F\u8D23\u989C\u8272\u914D\u7F6E</li></ul>`,13),o=[p];function c(t,i,r,d,C,A){return a(),n("div",null,o)}const D=s(e,[["render",c]]);export{y as __pageData,D as default};
