"use strict";

var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (e) {
        return typeof e;
      }
    : function (e) {
        return e &&
          "function" == typeof Symbol &&
          e.constructor === Symbol &&
          e !== Symbol.prototype
          ? "symbol"
          : typeof e;
      };

  !(function (e) {
  
    var i = {
        init: function (t, i) {
          var o = this;
          if (
            ((o.dom = e("body")),
            (o.$elem = e(i)),
            (o.options = e.extend({}, e.fn.modaal.options, o.$elem.data(), t)),
            (o.xhr = null),
            (o.scope = {
              is_open: !1,
              id:
                "modaal_" +
                new Date().getTime() +
                Math.random().toString(16).substring(2),
              source: o.options.content_source
                ? o.options.content_source
                : o.$elem.attr("href"),
            }),
            o.$elem.attr("data-modaal-scope", o.scope.id),
            (o.private_options = { active_class: "is_active" }),
            (o.lastFocus = null),
            o.options.is_locked ||
            "confirm" == o.options.type ||
            o.options.hide_close
              ? (o.scope.close_btn = "")
              : (o.scope.close_btn =
                  '<button type="button" class="modaal-close" id="modaal-close" aria-label="' +
                  o.options.close_aria_label +
                  '"><span>' +
                  o.options.close_text +
                  "</span></button>"),
            "none" === o.options.animation &&
              ((o.options.animation_speed = 0),
              (o.options.after_callback_delay = 0)),
            e(i).on("click.Modaal", function (e) {
              e.preventDefault(), o.create_modaal(o, e);
            }),
            !0 === o.options.outer_controls)
          )
            var s = "outer";
          else var s = "inner";
          (o.scope.prev_btn =
            '<button type="button" class="modaal-gallery-control modaal-gallery-prev modaal-gallery-prev-' +
            s +
            '" id="modaal-gallery-prev" aria-label="Previous image (use left arrow to change)"><span>Previous Image</span></button>'),
            (o.scope.next_btn =
              '<button type="button" class="modaal-gallery-control modaal-gallery-next modaal-gallery-next-' +
              s +
              '" id="modaal-gallery-next" aria-label="Next image (use right arrow to change)"><span>Next Image</span></button>'),
            !0 === o.options.start_open && o.create_modaal(o);
        },
        create_modaal: function (e, t) {
          var i,
            e = this;
          if (
            ((e.lastFocus = e.$elem),
            !1 !== e.options.should_open &&
              ("function" != typeof e.options.should_open ||
                !1 !== e.options.should_open()))
          ) {
            switch ((e.options.before_open.call(e, t), e.options.type)) {
              case "inline":
                e.create_basic();
                break;
              case "ajax":
                (i = e.options.source(e.$elem, e.scope.source)),
                  e.fetch_ajax(i);
                break;
              case "confirm":
                (e.options.is_locked = !0), e.create_confirm();
                break;
              case "image":
                e.create_image();
                break;
              case "iframe":
                (i = e.options.source(e.$elem, e.scope.source)),
                  e.create_iframe(i);
                break;
              case "video":
                e.create_video(e.scope.source);
                break;
              case "instagram":
                e.create_instagram();
            }
            e.watch_events();
          }
        },
        watch_events: function () {
          var t = this;
          t.dom.off("click.Modaal keyup.Modaal keydown.Modaal"),
            t.dom.on("keydown.Modaal", function (i) {
              var o = i.keyCode,
                s = i.target;
              9 == o &&
                t.scope.is_open &&
                (e.contains(document.getElementById(t.scope.id), s) ||
                  e("#" + t.scope.id)
                    .find('*[tabindex="0"]')
                    .focus());
            }),
            t.dom.on("keyup.Modaal", function (i) {
              var o = i.keyCode,
                s = i.target;
              return (
                i.shiftKey &&
                  9 == i.keyCode &&
                  t.scope.is_open &&
                  (e.contains(document.getElementById(t.scope.id), s) ||
                    e("#" + t.scope.id)
                      .find(".modaal-close")
                      .focus()),
                !t.options.is_locked && 27 == o && t.scope.is_open
                  ? !e(document.activeElement).is(
                      "input:not(:checkbox):not(:radio)"
                    ) && void t.modaal_close()
                  : "image" == t.options.type
                  ? (37 == o &&
                      t.scope.is_open &&
                      !e("#" + t.scope.id + " .modaal-gallery-prev").hasClass(
                        "is_hidden"
                      ) &&
                      t.gallery_update("prev"),
                    void (
                      39 == o &&
                      t.scope.is_open &&
                      !e("#" + t.scope.id + " .modaal-gallery-next").hasClass(
                        "is_hidden"
                      ) &&
                      t.gallery_update("next")
                    ))
                  : void 0
              );
            }),
            t.dom.on("click.Modaal", function (i) {
              var o = e(i.target);
              if (
                !t.options.is_locked &&
                ((t.options.overlay_close && o.is(".modaal-inner-wrapper")) ||
                  o.is(".modaal-close") ||
                  o.closest(".modaal-close").length)
              )
                return void t.modaal_close();
              if (o.is(".modaal-confirm-btn"))
                return (
                  o.is(".modaal-ok") &&
                    t.options.confirm_callback.call(t, t.lastFocus),
                  o.is(".modaal-cancel") &&
                    t.options.confirm_cancel_callback.call(t, t.lastFocus),
                  void t.modaal_close()
                );
              if (o.is(".modaal-gallery-control")) {
                if (o.hasClass("is_hidden")) return;
                return (
                  o.is(".modaal-gallery-prev") && t.gallery_update("prev"),
                  void (
                    o.is(".modaal-gallery-next") && t.gallery_update("next")
                  )
                );
              }
            });
        },
        build_modal: function (t) {
          var i = this,
            o = "";
          "instagram" == i.options.type && (o = " modaal-instagram");
          var s,
            n =
              "video" == i.options.type
                ? "modaal-video-wrap"
                : "modaal-content";
          switch (i.options.animation) {
            case "fade":
              s = " modaal-start_fade";
              break;
            case "slide-down":
              s = " modaal-start_slidedown";
              break;
            default:
              s = " modaal-start_none";
          }
          var a = "";
          i.options.fullscreen && (a = " modaal-fullscreen"),
            ("" === i.options.custom_class &&
              void 0 === i.options.custom_class) ||
              (i.options.custom_class = " " + i.options.custom_class);
          var r = "";
          i.options.width &&
          i.options.height &&
          "number" == typeof i.options.width &&
          "number" == typeof i.options.height
            ? (r =
                ' style="max-width:' +
                i.options.width +
                "px;height:" +
                i.options.height +
                'px;overflow:auto;"')
            : i.options.width && "number" == typeof i.options.width
            ? (r = ' style="max-width:' + i.options.width + 'px;"')
            : i.options.height &&
              "number" == typeof i.options.height &&
              (r = ' style="height:' + i.options.height + 'px;overflow:auto;"'),
            ("image" == i.options.type ||
              "video" == i.options.type ||
              "instagram" == i.options.type ||
              i.options.fullscreen) &&
              (r = "");
          var l = "";
          i.is_touch() && (l = ' style="cursor:pointer;"');
          var d =
            '<div class="modaal-wrapper modaal-' +
            i.options.type +
            s +
            o +
            a +
            i.options.custom_class +
            '" id="' +
            i.scope.id +
            '"><div class="modaal-outer-wrapper"><div class="modaal-inner-wrapper"' +
            l +
            ">";
          "video" != i.options.type &&
            (d += '<div class="modaal-container"' + r + ">"),
            (d +=
              '<div class="' +
              n +
              ' modaal-focus" aria-hidden="false" aria-label="' +
              i.options.accessible_title +
              " - " +
              i.options.close_aria_label +
              '" role="dialog">'),
            (d +=
              "inline" == i.options.type
                ? '<div class="modaal-content-container" role="document"></div>'
                : t),
            (d += "</div>" + i.scope.close_btn),
            "video" != i.options.type && (d += "</div>"),
            (d += "</div>"),
            "image" == i.options.type &&
              !0 === i.options.outer_controls &&
              (d += i.scope.prev_btn + i.scope.next_btn),
            (d += "</div></div>"),
            e("#" + i.scope.id + "_overlay").length < 1 && i.dom.append(d),
            "inline" == i.options.type &&
              t.appendTo("#" + i.scope.id + " .modaal-content-container"),
            i.modaal_overlay("show");
        },
        create_basic: function () {
          var t = this,
            i = e(t.scope.source),
            o = "";
          i.length
            ? ((o = i.contents().detach()), i.empty())
            : (o =
                "Content could not be loaded. Please check the source and try again."),
            t.build_modal(o);
        },
        create_instagram: function () {
          var t = this,
            i = t.options.instagram_id,
            o = "",
            s =
              "Instagram photo couldn't be loaded, please check the embed code and try again.";
          if (
            (t.build_modal(
              '<div class="modaal-content-container' +
                ("" != t.options.loading_class
                  ? " " + t.options.loading_class
                  : "") +
                '">' +
                t.options.loading_content +
                "</div>"
            ),
            "" != i && null !== i && void 0 !== i)
          ) {
            var n =
              "https://api.instagram.com/oembed?url=http://instagr.am/p/" +
              i +
              "/";
            e.ajax({
              url: n,
              dataType: "jsonp",
              cache: !1,
              success: function (i) {
                t.dom.append(
                  '<div id="temp-ig" style="width:0;height:0;overflow:hidden;">' +
                    i.html +
                    "</div>"
                ),
                  t.dom.attr("data-igloaded")
                    ? window.instgrm.Embeds.process()
                    : t.dom.attr("data-igloaded", "true");
                var o = "#" + t.scope.id + " .modaal-content-container";
                e(o).length > 0 &&
                  setTimeout(function () {
                    e("#temp-ig").contents().clone().appendTo(o),
                      e("#temp-ig").remove();
                  }, 1e3);
              },
              error: function () {
                o = s;
                var i = e("#" + t.scope.id + " .modaal-content-container");
                i.length > 0 &&
                  (i
                    .removeClass(t.options.loading_class)
                    .addClass(t.options.ajax_error_class),
                  i.html(o));
              },
            });
          } else o = s;
          return !1;
        },
        fetch_ajax: function (t) {
          var i = this;
          null == i.options.accessible_title &&
            (i.options.accessible_title = "Dialog Window"),
            null !== i.xhr && (i.xhr.abort(), (i.xhr = null)),
            i.build_modal(
              '<div class="modaal-content-container' +
                ("" != i.options.loading_class
                  ? " " + i.options.loading_class
                  : "") +
                '">' +
                i.options.loading_content +
                "</div>"
            ),
            (i.xhr = e.ajax(t, {
              success: function (t) {
                var o = e("#" + i.scope.id).find(".modaal-content-container");
                o.length > 0 &&
                  (o.removeClass(i.options.loading_class),
                  o.html(t),
                  i.options.ajax_success.call(i, o));
              },
              error: function (t) {
                if ("abort" != t.statusText) {
                  var o = e("#" + i.scope.id + " .modaal-content-container");
                  o.length > 0 &&
                    (o
                      .removeClass(i.options.loading_class)
                      .addClass(i.options.ajax_error_class),
                    o.html(
                      "Content could not be loaded. Please check the source and try again."
                    ));
                }
              },
            }));
        },
        create_confirm: function () {
          var e,
            t = this;
          (e =
            '<div class="modaal-content-container"><h1 id="modaal-title">' +
            t.options.confirm_title +
            '</h1><div class="modaal-confirm-content">' +
            t.options.confirm_content +
            '</div><div class="modaal-confirm-wrap"><button type="button" class="modaal-confirm-btn modaal-ok" aria-label="Confirm">' +
            t.options.confirm_button_text +
            '</button><button type="button" class="modaal-confirm-btn modaal-cancel" aria-label="Cancel">' +
            t.options.confirm_cancel_button_text +
            "</button></div></div></div>"),
            t.build_modal(e);
        },
        create_image: function () {
          var t,
            i,
            o = this,
            s = "";
          if (o.$elem.is("[data-group]") || o.$elem.is("[rel]")) {
            var n = o.$elem.is("[data-group]"),
              a = n ? o.$elem.attr("data-group") : o.$elem.attr("rel"),
              r = e(n ? '[data-group="' + a + '"]' : '[rel="' + a + '"]');
            r.removeAttr("data-gallery-active", "is_active"),
              o.$elem.attr("data-gallery-active", "is_active"),
              (i = r.length - 1);
            var l = [];
            (s = '<div class="modaal-gallery-item-wrap">'),
              r.each(function (t, i) {
                var o = "",
                  s = "",
                  n = "",
                  a = !1,
                  r = !1,
                  d = i.getAttribute("data-modaal-desc"),
                  c = i.getAttribute("data-gallery-active");
                e(i).attr("data-modaal-content-source")
                  ? (o = e(i).attr("data-modaal-content-source"))
                  : e(i).attr("href")
                  ? (o = e(i).attr("href"))
                  : e(i).attr("src")
                  ? (o = e(i).attr("src"))
                  : ((o =
                      "trigger requires href or data-modaal-content-source attribute"),
                    (r = !0)),
                  "" != d && null !== d && void 0 !== d
                    ? ((s = d),
                      (n =
                        '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' +
                        (t + 1) +
                        " - </span>" +
                        d.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
                        "</div>"))
                    : (n =
                        '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' +
                        (t + 1) +
                        "</span></div>"),
                  c && (a = !0);
                var p = {
                  url: o,
                  alt: s,
                  rawdesc: d,
                  desc: n,
                  active: a,
                  src_error: r,
                };
                l.push(p);
              });
            for (var d = 0; d < l.length; d++) {
              var c = "",
                p = l[d].rawdesc
                  ? "Image: " + l[d].rawdesc
                  : "Image " + d + " no description";
              l[d].active && (c = " " + o.private_options.active_class);
              var u = l[d].src_error
                ? l[d].url
                : '<img src="' + l[d].url + '" alt=" " style="width:100%">';
              s +=
                '<div class="modaal-gallery-item gallery-item-' +
                d +
                c +
                '" aria-label="' +
                p +
                '">' +
                u +
                l[d].desc +
                "</div>";
            }
            (s += "</div>"),
              1 != o.options.outer_controls &&
                (s += o.scope.prev_btn + o.scope.next_btn);
          } else {
            var h,
              f = !1;
            o.$elem.attr("data-modaal-content-source")
              ? (h = o.$elem.attr("data-modaal-content-source"))
              : o.$elem.attr("href")
              ? (h = o.$elem.attr("href"))
              : o.$elem.attr("src")
              ? (h = o.$elem.attr("src"))
              : ((h =
                  "trigger requires href or data-modaal-content-source attribute"),
                (f = !0));
            var m = "",
              v = "",
              p = "";
            o.$elem.attr("data-modaal-desc")
              ? ((p = o.$elem.attr("data-modaal-desc")),
                (m = o.$elem.attr("data-modaal-desc")),
                (v =
                  '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image - </span>' +
                  m.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
                  "</div>"))
              : (p = "Image with no description");
            var u = f ? h : '<img src="' + h + '" alt=" " style="width:100%">';
            s =
              '<div class="modaal-gallery-item is_active" aria-label="' +
              p +
              '">' +
              u +
              v +
              "</div>";
          }
          (t = s),
            o.build_modal(t),
            e(".modaal-gallery-item.is_active").is(".gallery-item-0") &&
              e(".modaal-gallery-prev").hide(),
            e(".modaal-gallery-item.is_active").is(".gallery-item-" + i) &&
              e(".modaal-gallery-next").hide();
        },
        gallery_update: function (t) {
          var i = this,
            o = e("#" + i.scope.id),
            s = o.find(".modaal-gallery-item"),
            n = s.length - 1;
          if (0 == n) return !1;
          var a = o.find(".modaal-gallery-prev"),
            r = o.find(".modaal-gallery-next"),
            l = 0,
            d = 0,
            c = o.find(
              ".modaal-gallery-item." + i.private_options.active_class
            ),
            p =
              "next" == t
                ? c.next(".modaal-gallery-item")
                : c.prev(".modaal-gallery-item");
          return (
            i.options.before_image_change.call(i, c, p),
            ("prev" != t || !o.find(".gallery-item-0").hasClass("is_active")) &&
              ("next" != t ||
                !o.find(".gallery-item-" + n).hasClass("is_active")) &&
              void c.stop().animate({ opacity: 0 }, 250, function () {
                p.addClass("is_next").css({
                  position: "absolute",
                  display: "block",
                  opacity: 0,
                });
                var t = e(document).width(),
                  s = t > 1140 ? 280 : 50;
                (l = o.find(".modaal-gallery-item.is_next").width()),
                  (d = o.find(".modaal-gallery-item.is_next").height());
                var u = o
                    .find(".modaal-gallery-item.is_next img")
                    .prop("naturalWidth"),
                  h = o
                    .find(".modaal-gallery-item.is_next img")
                    .prop("naturalHeight");
                u > t - s
                  ? ((l = t - s),
                    o.find(".modaal-gallery-item.is_next").css({ width: l }),
                    o
                      .find(".modaal-gallery-item.is_next img")
                      .css({ width: l }),
                    (d = o
                      .find(".modaal-gallery-item.is_next")
                      .find("img")
                      .height()))
                  : ((l = u), (d = h)),
                  o
                    .find(".modaal-gallery-item-wrap")
                    .stop()
                    .animate({ width: l, height: d }, 250, function () {
                      c
                        .removeClass(
                          i.private_options.active_class +
                            " " +
                            i.options.gallery_active_class
                        )
                        .removeAttr("style"),
                        c.find("img").removeAttr("style"),
                        p
                          .addClass(
                            i.private_options.active_class +
                              " " +
                              i.options.gallery_active_class
                          )
                          .removeClass("is_next")
                          .css("position", ""),
                        p.stop().animate({ opacity: 1 }, 250, function () {
                          e(this).removeAttr("style").css({ width: "100%" }),
                            e(this).find("img").css("width", "100%"),
                            o
                              .find(".modaal-gallery-item-wrap")
                              .removeAttr("style"),
                            i.options.after_image_change.call(i, p);
                        }),
                        o.find(".modaal-gallery-item").removeAttr("tabindex"),
                        o
                          .find(
                            ".modaal-gallery-item." +
                              i.private_options.active_class
                          )
                          .attr("tabindex", "0")
                          .focus(),
                        o
                          .find(
                            ".modaal-gallery-item." +
                              i.private_options.active_class
                          )
                          .is(".gallery-item-0")
                          ? a.stop().animate({ opacity: 0 }, 150, function () {
                              e(this).hide();
                            })
                          : a
                              .stop()
                              .css({
                                display: "block",
                                opacity: a.css("opacity"),
                              })
                              .animate({ opacity: 1 }, 150),
                        o
                          .find(
                            ".modaal-gallery-item." +
                              i.private_options.active_class
                          )
                          .is(".gallery-item-" + n)
                          ? r.stop().animate({ opacity: 0 }, 150, function () {
                              e(this).hide();
                            })
                          : r
                              .stop()
                              .css({
                                display: "block",
                                opacity: a.css("opacity"),
                              })
                              .animate({ opacity: 1 }, 150);
                    });
              })
          );
        },
        create_video: function (e) {
          var t,
            i = this;
          (t =
            '<iframe src="' +
            e +
            '" class="modaal-video-frame" frameborder="0" allowfullscreen></iframe>'),
            i.build_modal(
              '<div class="modaal-video-container">' + t + "</div>"
            );
        },
        create_iframe: function (e) {
          var t,
            i = this;
          (t =
            null !== i.options.width ||
            void 0 !== i.options.width ||
            null !== i.options.height ||
            void 0 !== i.options.height
              ? '<iframe src="' +
                e +
                '" class="modaal-iframe-elem" frameborder="0" allowfullscreen></iframe>'
              : '<div class="modaal-content-container">Please specify a width and height for your iframe</div>'),
            i.build_modal(t);
        },
        modaal_open: function () {
          var t = this,
            i = e("#" + t.scope.id),
            o = t.options.animation;
          "none" === o &&
            (i.removeClass("modaal-start_none"),
            t.options.after_open.call(t, i)),
            "fade" === o && i.removeClass("modaal-start_fade"),
            "slide-down" === o && i.removeClass("modaal-start_slide_down");
          var s = i;
          e(".modaal-wrapper *[tabindex=0]").removeAttr("tabindex"),
            (s =
              "image" == t.options.type
                ? e("#" + t.scope.id).find(
                    ".modaal-gallery-item." + t.private_options.active_class
                  )
                : i.find(".modaal-iframe-elem").length
                ? i.find(".modaal-iframe-elem")
                : i.find(".modaal-video-wrap").length
                ? i.find(".modaal-video-wrap")
                : i.find(".modaal-focus")),
            s.attr("tabindex", "0").focus(),
            "none" !== o &&
              setTimeout(function () {
                t.options.after_open.call(t, i);
              }, t.options.after_callback_delay);
        },
        modaal_close: function () {
          var t = this,
            i = e("#" + t.scope.id);
          t.options.before_close.call(t, i),
            null !== t.xhr && (t.xhr.abort(), (t.xhr = null)),
            "none" === t.options.animation && i.addClass("modaal-start_none"),
            "fade" === t.options.animation && i.addClass("modaal-start_fade"),
            "slide-down" === t.options.animation &&
              i.addClass("modaal-start_slide_down"),
            setTimeout(function () {
              "inline" == t.options.type &&
                e("#" + t.scope.id + " .modaal-content-container")
                  .contents()
                  .detach()
                  .appendTo(t.scope.source),
                i.remove(),
                t.options.after_close.call(t),
                (t.scope.is_open = !1);
            }, t.options.after_callback_delay),
            t.modaal_overlay("hide"),
            null != t.lastFocus && t.lastFocus.focus();
        },
        modaal_overlay: function (t) {
          var i = this;
          "show" == t
            ? ((i.scope.is_open = !0),
              i.options.background_scroll || i.dom.addClass("modaal-noscroll"),
              e("#" + i.scope.id + "_overlay").length < 1 &&
                i.dom.append(
                  '<div class="modaal-overlay" id="' +
                    i.scope.id +
                    '_overlay"></div>'
                ),
              e("#" + i.scope.id + "_overlay")
                .css("background", i.options.background)
                .stop()
                .animate(
                  { opacity: i.options.overlay_opacity },
                  i.options.animation_speed,
                  function () {
                    i.modaal_open();
                  }
                ))
            : "hide" == t &&
              e("#" + i.scope.id + "_overlay")
                .stop()
                .animate(
                  { opacity: 0 },
                  i.options.animation_speed,
                  function () {
                    e(this).remove(), i.dom.removeClass("modaal-noscroll");
                  }
                );
        },
        is_touch: function () {
          return "ontouchstart" in window || navigator.maxTouchPoints;
        },
      },
      o = [];
    (e.fn.modaal = function (t) {
      return this.each(function (s) {
        var n = e(this).data("modaal");
        if (n) {
          if ("string" == typeof t)
            switch (t) {
              case "open":
                n.create_modaal(n);
                break;
              case "close":
                n.modaal_close();
            }
        } else {
          var a = Object.create(i);
          a.init(t, this),
            e.data(this, "modaal", a),
            o.push({ element: e(this).attr("class"), options: t });
        }
      });
    }),
      (e.fn.modaal.options = {
        type: "inline",
        content_source: null,
        animation: "fade",
        animation_speed: 300,
        after_callback_delay: 350,
        is_locked: !1,
        hide_close: !1,
        background: "#000",
        overlay_opacity: "0.8",
        overlay_close: !0,
        accessible_title: "Dialog Window",
        start_open: !1,
        fullscreen: !1,
        custom_class: "",
        background_scroll: !1,
        should_open: !0,
        close_text: "Close",
        close_aria_label: "Close (Press escape to close)",
        width: null,
        height: null,
        before_open: function () {},
        after_open: function () {},
        before_close: function () {},
        after_close: function () {},
        source: function (e, t) {
          return t;
        },
        confirm_button_text: "Confirm",
        confirm_cancel_button_text: "Cancel",
        confirm_title: "Confirm Title",
        confirm_content:
          "<p>This is the default confirm dialog content. Replace me through the options</p>",
        confirm_callback: function () {},
        confirm_cancel_callback: function () {},
        gallery_active_class: "gallery_active_item",
        outer_controls: !1,
        before_image_change: function (e, t) {},
        after_image_change: function (e) {},
        loading_content:
          '<div class="modaal-loading-spinner"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>',
        loading_class: "is_loading",
        ajax_error_class: "modaal-error",
        ajax_success: function () {},
        instagram_id: null,
      }),
      e(function () {
        var i = e(".modaal");
        i.length &&
          i.each(function () {
            t(e(this));
          });
        var s = new MutationObserver(function (i) {
            i.forEach(function (i) {
              i.addedNodes &&
                i.addedNodes.length > 0 &&
                [].some.call(i.addedNodes, function (i) {
                  var s = e(i);
                  (s.is("a") || s.is("button")) &&
                    (s.hasClass("modaal")
                      ? t(s)
                      : o.forEach(function (t) {
                          if (t.element == s.attr("class"))
                            return e(s).modaal(t.options), !1;
                        }));
                });
            });
          }),
          n = { subtree: !0, attributes: !0, childList: !0, characterData: !0 };
        setTimeout(function () {
          s.observe(document.body, n);
        }, 500);
      });
  })(jQuery, window, document),
  (function (e, t) {
    (e = window),
      "function" == typeof define && define.amd
        ? define(t)
        : "object" ===
          ("undefined" == typeof exports ? "undefined" : _typeof(exports))
        ? (module.exports = t())
        : (e.Blazy = t());
  })(void 0, function () {
    function e(e) {
      var i = e._util;
      (i.elements = l(e.options)),
        (i.count = i.elements.length),
        i.destroyed &&
          ((i.destroyed = !1),
          e.options.container &&
            u(e.options.container, function (e) {
              c(e, "scroll", i.validateT);
            }),
          c(window, "resize", i.saveViewportOffsetT),
          c(window, "resize", i.validateT),
          c(window, "scroll", i.validateT)),
        t(e);
    }
    function t(e) {
      for (var t = e._util, o = 0; o < t.count; o++) {
        var s,
          n = t.elements[o],
          r = n;
        s = e.options;
        var l = r.getBoundingClientRect();
        s.container && g && (r = r.closest(s.containerClass))
          ? ((r = r.getBoundingClientRect()),
            (s =
              !!i(r, m) &&
              i(l, {
                top: r.top - s.offset,
                right: r.right + s.offset,
                bottom: r.bottom + s.offset,
                left: r.left - s.offset,
              })))
          : (s = i(l, m)),
          (s || a(n, e.options.successClass)) &&
            (e.load(n), t.elements.splice(o, 1), t.count--, o--);
      }
      0 === t.count && e.destroy();
    }
    function i(e, t) {
      return (
        e.right >= t.left &&
        e.bottom >= t.top &&
        e.left <= t.right &&
        e.top <= t.bottom
      );
    }
    function o(e, t, i) {
      if (
        !a(e, i.successClass) &&
        (t || i.loadInvisible || (0 < e.offsetWidth && 0 < e.offsetHeight))
      )
        if ((t = e.getAttribute(f) || e.getAttribute(i.src))) {
          t = t.split(i.separator);
          var o = t[v && 1 < t.length ? 1 : 0],
            l = e.getAttribute(i.srcset),
            d = "img" === e.nodeName.toLowerCase(),
            h = (t = e.parentNode) && "picture" === t.nodeName.toLowerCase();
          if (d || void 0 === e.src) {
            var m = new Image(),
              g = function w() {
                i.error && i.error(e, "invalid"),
                  r(e, i.errorClass),
                  p(m, "error", w),
                  p(m, "load", y);
              },
              y = function b() {
                d
                  ? h || n(e, o, l)
                  : (e.style.backgroundImage = 'url("' + o + '")'),
                  s(e, i),
                  p(m, "load", b),
                  p(m, "error", g);
              };
            h &&
              ((m = e),
              u(t.getElementsByTagName("source"), function (e) {
                var t = i.srcset,
                  o = e.getAttribute(t);
                o && (e.setAttribute("srcset", o), e.removeAttribute(t));
              })),
              c(m, "error", g),
              c(m, "load", y),
              n(m, o, l);
          } else (e.src = o), s(e, i);
        } else
          "video" === e.nodeName.toLowerCase()
            ? (u(e.getElementsByTagName("source"), function (e) {
                var t = i.src,
                  o = e.getAttribute(t);
                o && (e.setAttribute("src", o), e.removeAttribute(t));
              }),
              e.load(),
              s(e, i))
            : (i.error && i.error(e, "missing"), r(e, i.errorClass));
    }
    function s(e, t) {
      r(e, t.successClass),
        t.success && t.success(e),
        e.removeAttribute(t.src),
        e.removeAttribute(t.srcset),
        u(t.breakpoints, function (t) {
          e.removeAttribute(t.src);
        });
    }
    function n(e, t, i) {
      i && e.setAttribute("srcset", i), (e.src = t);
    }
    function a(e, t) {
      return -1 !== (" " + e.className + " ").indexOf(" " + t + " ");
    }
    function r(e, t) {
      a(e, t) || (e.className += " " + t);
    }
    function l(e) {
      var t = [];
      e = e.root.querySelectorAll(e.selector);
      for (var i = e.length; i--; t.unshift(e[i]));
      return t;
    }
    function d(e) {
      (m.bottom =
        (window.innerHeight || document.documentElement.clientHeight) + e),
        (m.right =
          (window.innerWidth || document.documentElement.clientWidth) + e);
    }
    function c(e, t, i) {
      e.attachEvent
        ? e.attachEvent && e.attachEvent("on" + t, i)
        : e.addEventListener(t, i, { capture: !1, passive: !0 });
    }
    function p(e, t, i) {
      e.detachEvent
        ? e.detachEvent && e.detachEvent("on" + t, i)
        : e.removeEventListener(t, i, { capture: !1, passive: !0 });
    }
    function u(e, t) {
      if (e && t)
        for (var i = e.length, o = 0; o < i && !1 !== t(e[o], o); o++);
    }
    function h(e, t, i) {
      var o = 0;
      return function () {
        var s = +new Date();
        s - o < t || ((o = s), e.apply(i, arguments));
      };
    }
    var f, m, v, g;
    return function (i) {
      if (!document.querySelectorAll) {
        var s = document.createStyleSheet();
        document.querySelectorAll = function (e, t, i, o, n) {
          for (
            n = document.all,
              t = [],
              e = e.replace(/\[for\b/gi, "[htmlFor").split(","),
              i = e.length;
            i--;

          ) {
            for (s.addRule(e[i], "k:v"), o = n.length; o--; )
              n[o].currentStyle.k && t.push(n[o]);
            s.removeRule(0);
          }
          return t;
        };
      }
      var n = this,
        a = (n._util = {});
      (a.elements = []),
        (a.destroyed = !0),
        (n.options = i || {}),
        (n.options.error = n.options.error || !1),
        (n.options.offset = n.options.offset || 100),
        (n.options.root = n.options.root || document),
        (n.options.success = n.options.success || !1),
        (n.options.selector = n.options.selector || ".b-lazy"),
        (n.options.separator = n.options.separator || "|"),
        (n.options.containerClass = n.options.container),
        (n.options.container =
          !!n.options.containerClass &&
          document.querySelectorAll(n.options.containerClass)),
        (n.options.errorClass = n.options.errorClass || "b-error"),
        (n.options.breakpoints = n.options.breakpoints || !1),
        (n.options.loadInvisible = n.options.loadInvisible || !1),
        (n.options.successClass = n.options.successClass || "b-loaded"),
        (n.options.validateDelay = n.options.validateDelay || 25),
        (n.options.saveViewportOffsetDelay =
          n.options.saveViewportOffsetDelay || 50),
        (n.options.srcset = n.options.srcset || "data-srcset"),
        (n.options.src = f = n.options.src || "data-src"),
        (g = Element.prototype.closest),
        (v = 1 < window.devicePixelRatio),
        (m = {}),
        (m.top = 0 - n.options.offset),
        (m.left = 0 - n.options.offset),
        (n.revalidate = function () {
          e(n);
        }),
        (n.load = function (e, t) {
          var i = this.options;
          void 0 === e.length
            ? o(e, t, i)
            : u(e, function (e) {
                o(e, t, i);
              });
        }),
        (n.destroy = function () {
          var e = this._util;
          this.options.container &&
            u(this.options.container, function (t) {
              p(t, "scroll", e.validateT);
            }),
            p(window, "scroll", e.validateT),
            p(window, "resize", e.validateT),
            p(window, "resize", e.saveViewportOffsetT),
            (e.count = 0),
            (e.elements.length = 0),
            (e.destroyed = !0);
        }),
        (a.validateT = h(
          function () {
            t(n);
          },
          n.options.validateDelay,
          n
        )),
        (a.saveViewportOffsetT = h(
          function () {
            d(n.options.offset);
          },
          n.options.saveViewportOffsetDelay,
          n
        )),
        d(n.options.offset),
        u(n.options.breakpoints, function (e) {
          if (e.width >= window.screen.width) return (f = e.src), !1;
        }),
        setTimeout(function () {
          e(n);
        });
    };
  }),
  !(function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof module && module.exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (e) {
    var t = -1,
      i = -1,
      o = function (e) {
        return parseFloat(e) || 0;
      },
      s = function l(t) {
        var i = 1,
          l = e(t),
          s = null,
          n = [];
        return (
          l.each(function () {
            var t = e(this),
              a = t.offset().top - o(t.css("margin-top")),
              r = n.length > 0 ? n[n.length - 1] : null;
            null === r
              ? n.push(t)
              : Math.floor(Math.abs(s - a)) <= i
              ? (n[n.length - 1] = r.add(t))
              : n.push(t),
              (s = a);
          }),
          n
        );
      },
      n = function (t) {
        var i = { byRow: !0, property: "height", target: null, remove: !1 };
        return "object" == ("undefined" == typeof t ? "undefined" : _typeof(t))
          ? e.extend(i, t)
          : ("boolean" == typeof t
              ? (i.byRow = t)
              : "remove" === t && (i.remove = !0),
            i);
      },
      a = (e.fn.matchHeight = function (t) {
        var i = n(t);
        if (i.remove) {
          var o = this;
          return (
            this.css(i.property, ""),
            e.each(a._groups, function (e, t) {
              t.elements = t.elements.not(o);
            }),
            this
          );
        }
        return this.length <= 1 && !i.target
          ? this
          : (a._groups.push({ elements: this, options: i }),
            a._apply(this, i),
            this);
      });
    (a.version = "0.7.0"),
      (a._groups = []),
      (a._throttle = 80),
      (a._maintainScroll = !1),
      (a._beforeUpdate = null),
      (a._afterUpdate = null),
      (a._rows = s),
      (a._parse = o),
      (a._parseOptions = n),
      (a._apply = function (t, i) {
        var r = n(i),
          l = e(t),
          d = [l],
          c = e(window).scrollTop(),
          p = e("html").outerHeight(!0),
          u = l.parents().filter(":hidden");
        return (
          u.each(function () {
            var t = e(this);
            t.data("style-cache", t.attr("style"));
          }),
          u.css("display", "block"),
          r.byRow &&
            !r.target &&
            (l.each(function () {
              var t = e(this),
                i = t.css("display");
              "inline-block" !== i &&
                "flex" !== i &&
                "inline-flex" !== i &&
                (i = "block"),
                t.data("style-cache", t.attr("style")),
                t.css({
                  display: i,
                  "padding-top": "0",
                  "padding-bottom": "0",
                  "margin-top": "0",
                  "margin-bottom": "0",
                  "border-top-width": "0",
                  "border-bottom-width": "0",
                  height: "100px",
                  overflow: "hidden",
                });
            }),
            (d = s(l)),
            l.each(function () {
              var t = e(this);
              t.attr("style", t.data("style-cache") || "");
            })),
          e.each(d, function (t, i) {
            var s = e(i),
              n = 0;
            if (r.target) n = r.target.outerHeight(!1);
            else {
              if (r.byRow && s.length <= 1) return void s.css(r.property, "");
              s.each(function () {
                var t = e(this),
                  i = t.attr("style"),
                  o = t.css("display");
                "inline-block" !== o &&
                  "flex" !== o &&
                  "inline-flex" !== o &&
                  (o = "block");
                var s = { display: o };
                (s[r.property] = ""),
                  t.css(s),
                  t.outerHeight(!1) > n && (n = t.outerHeight(!1)),
                  i ? t.attr("style", i) : t.css("display", "");
              });
            }
            s.each(function () {
              var t = e(this),
                i = 0;
              (r.target && t.is(r.target)) ||
                ("border-box" !== t.css("box-sizing") &&
                  ((i +=
                    o(t.css("border-top-width")) +
                    o(t.css("border-bottom-width"))),
                  (i += o(t.css("padding-top")) + o(t.css("padding-bottom")))),
                t.css(r.property, n - i + "px"));
            });
          }),
          u.each(function () {
            var t = e(this);
            t.attr("style", t.data("style-cache") || null);
          }),
          a._maintainScroll &&
            e(window).scrollTop((c / p) * e("html").outerHeight(!0)),
          this
        );
      }),
      (a._applyDataApi = function () {
        var t = {};
        e("[data-match-height], [data-mh]").each(function () {
          var i = e(this),
            o = i.attr("data-mh") || i.attr("data-match-height");
          o in t ? (t[o] = t[o].add(i)) : (t[o] = i);
        }),
          e.each(t, function () {
            this.matchHeight(!0);
          });
      });
    var r = function (t) {
      a._beforeUpdate && a._beforeUpdate(t, a._groups),
        e.each(a._groups, function () {
          a._apply(this.elements, this.options);
        }),
        a._afterUpdate && a._afterUpdate(t, a._groups);
    };
    (a._update = function (o, s) {
      if (s && "resize" === s.type) {
        var n = e(window).width();
        if (n === t) return;
        t = n;
      }
      o
        ? -1 === i &&
          (i = setTimeout(function () {
            r(s), (i = -1);
          }, a._throttle))
        : r(s);
    }),
      e(a._applyDataApi),
      e(window).bind("load", function (e) {
        a._update(!1, e);
      }),
      e(window).bind("resize orientationchange", function (e) {
        a._update(!0, e);
      });
  }),
  !(function (e, t) {
    (e = window),
      "function" == typeof define && define.amd
        ? define([], function () {
            return (e.svg4everybody = t());
          })
        : "object" ==
            ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
          module.exports
        ? (module.exports = t())
        : (e.svg4everybody = t());
  })(void 0, function () {
    function e(e, t, i) {
      if (i) {
        var o = document.createDocumentFragment(),
          s = !t.hasAttribute("viewBox") && i.getAttribute("viewBox");
        s && t.setAttribute("viewBox", s);
        for (var n = i.cloneNode(!0); n.childNodes.length; )
          o.appendChild(n.firstChild);
        e.appendChild(o);
      }
    }
    function t(t) {
      (t.onreadystatechange = function () {
        if (4 === t.readyState) {
          var i = t._cachedDocument;
          i ||
            ((i = t._cachedDocument =
              document.implementation.createHTMLDocument("")),
            (i.body.innerHTML = t.responseText),
            (t._cachedTarget = {})),
            t._embeds.splice(0).map(function (o) {
              var s = t._cachedTarget[o.id];
              s || (s = t._cachedTarget[o.id] = i.getElementById(o.id)),
                e(o.parent, o.svg, s);
            });
        }
      }),
        t.onreadystatechange();
    }
    function i(i) {
      function s() {
        for (var i = 0; i < f.length; ) {
          var r = f[i],
            l = r.parentNode,
            d = o(l),
            c = r.getAttribute("xlink:href") || r.getAttribute("href");
          if (
            (!c && a.attributeName && (c = r.getAttribute(a.attributeName)),
            d && c)
          ) {
            if (n)
              if (!a.validate || a.validate(c, d, r)) {
                l.removeChild(r);
                var p = c.split("#"),
                  v = p.shift(),
                  g = p.join("#");
                if (v.length) {
                  var y = u[v];
                  y ||
                    ((y = u[v] = new XMLHttpRequest()),
                    y.open("GET", v),
                    y.send(),
                    (y._embeds = [])),
                    y._embeds.push({ parent: l, svg: d, id: g }),
                    t(y);
                } else e(l, d, document.getElementById(g));
              } else ++i, ++m;
          } else ++i;
        }
        (!f.length || f.length - m > 0) && h(s, 67);
      }
      var n,
        a = Object(i),
        r = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
        l = /\bAppleWebKit\/(\d+)\b/,
        d = /\bEdge\/12\.(\d+)\b/,
        c = /\bEdge\/.(\d+)\b/,
        p = window.top !== window.self;
      n =
        "polyfill" in a
          ? a.polyfill
          : r.test(navigator.userAgent) ||
            (navigator.userAgent.match(d) || [])[1] < 10547 ||
            (navigator.userAgent.match(l) || [])[1] < 537 ||
            (c.test(navigator.userAgent) && p);
      var u = {},
        h = window.requestAnimationFrame || setTimeout,
        f = document.getElementsByTagName("use"),
        m = 0;
      n && s();
    }
    function o(e) {
      for (
        var t = e;
        "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode);

      );
      return t;
    }
    return i;
  }),
  (function (e, t, i, o) {
    function s(o, s) {
      (this.options = e.extend({}, r, s)),
        (this._container = e("#" + this.options.containerID)),
        this._container.length &&
          ((this.jQwindow = e(t)),
          (this.jQdocument = e(i)),
          (this._holder = e(o)),
          (this._nav = {}),
          (this._first = e(this.options.first)),
          (this._previous = e(this.options.previous)),
          (this._next = e(this.options.next)),
          (this._last = e(this.options.last)),
          (this._items = this._container.children(":visible")),
          (this._itemsShowing = e([])),
          (this._itemsHiding = e([])),
          (this._numPages = Math.ceil(
            this._items.length / this.options.perPage
          )),
          (this._currentPageNum = this.options.startPage),
          (this._clicked = !1),
          (this._cssAnimSupport = this.getCSSAnimationSupport()),
          this.init());
    }
    var n = "jPages",
      a = null,
      r = {
        containerID: "",
        first: !1,
        previous: "← previous",
        next: "next →",
        last: !1,
        links: "numeric",
        startPage: 1,
        perPage: 10,
        midRange: 5,
        startRange: 1,
        endRange: 1,
        keyBrowse: !1,
        scrollBrowse: !1,
        pause: 0,
        clickStop: !1,
        delay: 50,
        direction: "forward",
        animation: "",
        fallback: 400,
        minHeight: !0,
        callback: o,
      };
    (s.prototype = {
      constructor: s,
      getCSSAnimationSupport: function () {
        var e = !1,
          t = "animation",
          i = "",
          s = "Webkit Moz O ms Khtml".split(" "),
          n = "",
          a = this._container.get(0);
        if ((a.style.animationName && (e = !0), e === !1))
          for (var r = 0; r < s.length; r++)
            if (a.style[s[r] + "AnimationName"] !== o) {
              (n = s[r]),
                (t = n + "Animation"),
                (i = "-" + n.toLowerCase() + "-"),
                (e = !0);
              break;
            }
        return e;
      },
      init: function () {
        this.setStyles(),
          this.setNav(),
          this.paginate(this._currentPageNum),
          this.setMinHeight();
      },
      setStyles: function () {
        var t =
          "<style>.jp-invisible { visibility: hidden !important; } .jp-hidden { display: none !important; }</style>";
        e(t).appendTo("head"),
          this._cssAnimSupport && this.options.animation.length
            ? this._items.addClass("animated jp-hidden")
            : this._items.hide();
      },
      setNav: function () {
        var t = this.writeNav();
        this._holder.each(
          this.bind(function (i, o) {
            var s = e(o);
            s.html(t),
              this.cacheNavElements(s, i),
              this.bindNavHandlers(i),
              this.disableNavSelection(o);
          }, this)
        ),
          this.options.keyBrowse && this.bindNavKeyBrowse(),
          this.options.scrollBrowse && this.bindNavScrollBrowse();
      },
      writeNav: function () {
        var e,
          t = 1;
        for (
          e = this.writeBtn("first") + this.writeBtn("previous");
          t <= this._numPages;
          t++
        ) {
          switch (
            (1 === t &&
              0 === this.options.startRange &&
              (e += "<span>...</span>"),
            (e +=
              t > this.options.startRange &&
              t <= this._numPages - this.options.endRange
                ? "<a href='#' class='jp-hidden'>"
                : "<a href='#' aria-label='Go to page " + t + "'>"),
            this.options.links)
          ) {
            case "numeric":
              e += t;
              break;
            case "blank":
              break;
            case "title":
              var i = this._items.eq(t - 1).attr("data-title");
              e += i !== o ? i : "";
          }
          (e += "</a>"),
            (t !== this.options.startRange &&
              t !== this._numPages - this.options.endRange) ||
              (e += "<span>...</span>");
        }
        return (e += this.writeBtn("next") + this.writeBtn("last") + "</div>");
      },
      writeBtn: function (t) {
        return this.options[t] === !1 || e(this["_" + t]).length
          ? ""
          : "<a class='jp-" + t + "'>" + this.options[t] + "</a>";
      },
      cacheNavElements: function (t, i) {
        (this._nav[i] = {}),
          (this._nav[i].holder = t),
          (this._nav[i].first = this._first.length
            ? this._first
            : this._nav[i].holder.find("a.jp-first")),
          (this._nav[i].previous = this._previous.length
            ? this._previous
            : this._nav[i].holder.find("a.jp-previous")),
          (this._nav[i].next = this._next.length
            ? this._next
            : this._nav[i].holder.find("a.jp-next")),
          (this._nav[i].last = this._last.length
            ? this._last
            : this._nav[i].holder.find("a.jp-last")),
          (this._nav[i].fstBreak = this._nav[i].holder.find("span:first")),
          (this._nav[i].lstBreak = this._nav[i].holder.find("span:last")),
          (this._nav[i].pages = this._nav[i].holder
            .find("a")
            .not(".jp-first, .jp-previous, .jp-next, .jp-last")),
          (this._nav[i].permPages = this._nav[i].pages
            .slice(0, this.options.startRange)
            .add(
              this._nav[i].pages.slice(
                this._numPages - this.options.endRange,
                this._numPages
              )
            )),
          (this._nav[i].pagesShowing = e([])),
          (this._nav[i].currentPage = e([]));
      },
      bindNavHandlers: function (t) {
        var i = this._nav[t];
        i.holder.bind(
          "click.jPages",
          this.bind(function (t) {
            var o = this.getNewPage(i, e(t.target));
            this.validNewPage(o) && ((this._clicked = !0), this.paginate(o)),
              t.preventDefault();
          }, this)
        ),
          this._first.length &&
            this._first.bind(
              "click.jPages",
              this.bind(function () {
                this.validNewPage(1) &&
                  ((this._clicked = !0), this.paginate(1));
              }, this)
            ),
          this._previous.length &&
            this._previous.bind(
              "click.jPages",
              this.bind(function () {
                var e = this._currentPageNum - 1;
                this.validNewPage(e) &&
                  ((this._clicked = !0), this.paginate(e));
              }, this)
            ),
          this._next.length &&
            this._next.bind(
              "click.jPages",
              this.bind(function () {
                var e = this._currentPageNum + 1;
                this.validNewPage(e) &&
                  ((this._clicked = !0), this.paginate(e));
              }, this)
            ),
          this._last.length &&
            this._last.bind(
              "click.jPages",
              this.bind(function () {
                this.validNewPage(this._numPages) &&
                  ((this._clicked = !0), this.paginate(this._numPages));
              }, this)
            );
      },
      disableNavSelection: function (e) {
        "undefined" != typeof e.onselectstart
          ? (e.onselectstart = function () {
              return !1;
            })
          : "undefined" != typeof e.style.MozUserSelect
          ? (e.style.MozUserSelect = "none")
          : (e.onmousedown = function () {
              return !1;
            });
      },
      bindNavKeyBrowse: function () {
        this.jQdocument.bind(
          "keydown.jPages",
          this.bind(function (e) {
            var t = e.target.nodeName.toLowerCase();
            if (
              this.elemScrolledIntoView() &&
              "input" !== t &&
              "textarea" != t
            ) {
              var i = this._currentPageNum;
              37 == e.which && (i = this._currentPageNum - 1),
                39 == e.which && (i = this._currentPageNum + 1),
                this.validNewPage(i) &&
                  ((this._clicked = !0), this.paginate(i));
            }
          }, this)
        );
      },
      elemScrolledIntoView: function () {
        var e, t, i, o;
        return (
          (e = this.jQwindow.scrollTop()),
          (t = e + this.jQwindow.height()),
          (i = this._container.offset().top),
          (o = i + this._container.height()),
          o >= e && i <= t
        );
      },
      bindNavScrollBrowse: function () {
        this._container.bind(
          "mousewheel.jPages DOMMouseScroll.jPages",
          this.bind(function (e) {
            var t =
              (e.originalEvent.wheelDelta || -e.originalEvent.detail) > 0
                ? this._currentPageNum - 1
                : this._currentPageNum + 1;
            return (
              this.validNewPage(t) && ((this._clicked = !0), this.paginate(t)),
              e.preventDefault(),
              !1
            );
          }, this)
        );
      },
      getNewPage: function (e, t) {
        return t.is(e.currentPage)
          ? this._currentPageNum
          : t.is(e.pages)
          ? e.pages.index(t) + 1
          : t.is(e.first)
          ? 1
          : t.is(e.last)
          ? this._numPages
          : t.is(e.previous)
          ? e.pages.index(e.currentPage)
          : t.is(e.next)
          ? e.pages.index(e.currentPage) + 2
          : void 0;
      },
      validNewPage: function (e) {
        return e !== this._currentPageNum && e > 0 && e <= this._numPages;
      },
      paginate: function (t) {
        var i, o;
        (i = this.updateItems(t)),
          (o = this.updatePages(t)),
          (this._currentPageNum = t),
          e.isFunction(this.options.callback) && this.callback(t, i, o),
          this.updatePause();
      },
      updateItems: function (e) {
        var t = this.getItemRange(e);
        return (
          (this._itemsHiding = this._itemsShowing),
          (this._itemsShowing = this._items.slice(t.start, t.end)),
          this._cssAnimSupport && this.options.animation.length
            ? this.cssAnimations(e)
            : this.jQAnimations(e),
          t
        );
      },
      getItemRange: function (e) {
        var t = {};
        return (
          (t.start = (e - 1) * this.options.perPage),
          (t.end = t.start + this.options.perPage),
          t.end > this._items.length && (t.end = this._items.length),
          t
        );
      },
      cssAnimations: function (e) {
        clearInterval(this._delay),
          this._itemsHiding
            .removeClass(this.options.animation + " jp-invisible")
            .addClass("jp-hidden"),
          this._itemsShowing.removeClass("jp-hidden").addClass("jp-invisible"),
          (this._itemsOriented = this.getDirectedItems(e)),
          (this._index = 0),
          (this._delay = setInterval(
            this.bind(function () {
              this._index === this._itemsOriented.length
                ? clearInterval(this._delay)
                : this._itemsOriented
                    .eq(this._index)
                    .removeClass("jp-invisible")
                    .addClass(this.options.animation),
                (this._index = this._index + 1);
            }, this),
            this.options.delay
          ));
      },
      jQAnimations: function (e) {
        clearInterval(this._delay),
          this._itemsHiding.addClass("jp-hidden"),
          this._itemsShowing.fadeTo(0, 0).removeClass("jp-hidden"),
          (this._itemsOriented = this.getDirectedItems(e)),
          (this._index = 0),
          (this._delay = setInterval(
            this.bind(function () {
              this._index === this._itemsOriented.length
                ? clearInterval(this._delay)
                : this._itemsOriented
                    .eq(this._index)
                    .fadeTo(this.options.fallback, 1),
                (this._index = this._index + 1);
            }, this),
            this.options.delay
          ));
      },
      getDirectedItems: function (t) {
        var i;
        switch (this.options.direction) {
          case "backwards":
            i = e(this._itemsShowing.get().reverse());
            break;
          case "random":
            i = e(
              this._itemsShowing.get().sort(function () {
                return Math.round(Math.random()) - 0.5;
              })
            );
            break;
          case "auto":
            i =
              t >= this._currentPageNum
                ? this._itemsShowing
                : e(this._itemsShowing.get().reverse());
            break;
          default:
            i = this._itemsShowing;
        }
        return i;
      },
      updatePages: function (e) {
        var t, i, o;
        t = this.getInterval(e);
        for (i in this._nav)
          this._nav.hasOwnProperty(i) &&
            ((o = this._nav[i]),
            this.updateBtns(o, e),
            this.updateCurrentPage(o, e),
            this.updatePagesShowing(o, t),
            this.updateBreaks(o, t));
        return t;
      },
      getInterval: function (e) {
        var t, i, o, s;
        return (
          (t = Math.ceil(this.options.midRange / 2)),
          (i = this._numPages - this.options.midRange),
          (o = e > t ? Math.max(Math.min(e - t, i), 0) : 0),
          (s =
            e > t
              ? Math.min(
                  e + t - (this.options.midRange % 2 > 0 ? 1 : 0),
                  this._numPages
                )
              : Math.min(this.options.midRange, this._numPages)),
          { start: o, end: s }
        );
      },
      updateBtns: function (e, t) {
        1 === t &&
          (e.first.addClass("jp-disabled"), e.previous.addClass("jp-disabled")),
          t === this._numPages &&
            (e.next.addClass("jp-disabled"), e.last.addClass("jp-disabled")),
          1 === this._currentPageNum &&
            t > 1 &&
            (e.first.removeClass("jp-disabled"),
            e.previous.removeClass("jp-disabled")),
          this._currentPageNum === this._numPages &&
            t < this._numPages &&
            (e.next.removeClass("jp-disabled"),
            e.last.removeClass("jp-disabled"));
      },
      updateCurrentPage: function (e, t) {
        e.currentPage.removeClass("jp-current"),
          (e.currentPage = e.pages.eq(t - 1).addClass("jp-current"));
      },
      updatePagesShowing: function (e, t) {
        var i = e.pages.slice(t.start, t.end).not(e.permPages);
        e.pagesShowing.not(i).addClass("jp-hidden"),
          i.not(e.pagesShowing).removeClass("jp-hidden"),
          (e.pagesShowing = i);
      },
      updateBreaks: function (e, t) {
        t.start > this.options.startRange ||
        (0 === this.options.startRange && t.start > 0)
          ? e.fstBreak.removeClass("jp-hidden")
          : e.fstBreak.addClass("jp-hidden"),
          t.end < this._numPages - this.options.endRange
            ? e.lstBreak.removeClass("jp-hidden")
            : e.lstBreak.addClass("jp-hidden");
      },
      callback: function (e, t, i) {
        var o = { current: e, interval: i, count: this._numPages },
          s = {
            showing: this._itemsShowing,
            oncoming: this._items.slice(
              t.start + this.options.perPage,
              t.end + this.options.perPage
            ),
            range: t,
            count: this._items.length,
          };
        (o.interval.start = o.interval.start + 1),
          (s.range.start = s.range.start + 1),
          this.options.callback(o, s);
      },
      updatePause: function () {
        if (this.options.pause && this._numPages > 1) {
          if (
            (clearTimeout(this._pause), this.options.clickStop && this._clicked)
          )
            return;
          this._pause = setTimeout(
            this.bind(function () {
              this.paginate(
                this._currentPageNum !== this._numPages
                  ? this._currentPageNum + 1
                  : 1
              );
            }, this),
            this.options.pause
          );
        }
      },
      setMinHeight: function () {
        this.options.minHeight &&
          !this._container.is("table, tbody") &&
          setTimeout(
            this.bind(function () {
              this._container.css({
                "min-height": this._container.css("height"),
              });
            }, this),
            1e3
          );
      },
      bind: function (e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      },
      destroy: function () {
        this.jQdocument.unbind("keydown.jPages"),
          this._container.unbind("mousewheel.jPages DOMMouseScroll.jPages"),
          this.options.minHeight && this._container.css("min-height", ""),
          this._cssAnimSupport && this.options.animation.length
            ? this._items.removeClass(
                "animated jp-hidden jp-invisible " + this.options.animation
              )
            : this._items.removeClass("jp-hidden").fadeTo(0, 1),
          this._holder.unbind("click.jPages").empty();
      },
    }),
      (e.fn[n] = function (t) {
        var i = e.type(t);
        return "object" === i
          ? (this.length &&
              !e.data(this, n) &&
              ((a = new s(this, t)),
              this.each(function () {
                e.data(this, n, a);
              })),
            this)
          : "string" === i && "destroy" === t
          ? (a.destroy(),
            this.each(function () {
              e.removeData(this, n);
            }),
            this)
          : "number" === i && t % 1 === 0
          ? (a.validNewPage(t) && a.paginate(t), this)
          : this;
      });
  })(jQuery, window, document),
  /iPad|iPhone|iPod/g.test(navigator.userAgent) &&
    !(function (e) {
      return (e.fn.focus = function () {
        return arguments[0];
      });
    })(jQuery),
  (function (e, t, i) {
    (t.speeds = { fast: 200, transition: 300, long: 500 }),
      (t.generateID = (function () {
        var e = 0;
        return function (t) {
          return (t = t ? t : "generatedID-"), t + e++;
        };
      })()),
      (t.vendorPlugins = function () {
        if (
          (svg4everybody(),
          (window.lazyLoader = new Blazy({
            loadInvisible: !0,
            offset: 0,
            success: function (i) {
              setTimeout(function () {
                i.classList.add("b-done"),
                  e(i).parent().hasClass("lazy-aspect-ratio") &&
                    e(i).parent().addClass("lazy-aspect-ratio-done");
              }, t.speeds.fast);
            },
            error: function (e, t) {
              console.log(t, e);
            },
          })),
          window.addEventListener(
            "afterChange",
            function () {
              return lazyLoader.revalidate();
            },
            !0
          ),
          document
            .querySelector(".site-header")
            .classList.contains("sticky-header"))
        ) {
          var i = document.body,
            o = "sticky-header-up",
            s = "sticky-header-down",
            n = 0,
            a = t.debounce(function () {
              var e = window.pageYOffset,
                t = document.querySelector(".site-header").offsetHeight;
              return e <= t
                ? (i.classList.remove(o), void i.classList.remove(s))
                : (e > n && !i.classList.contains(s) && e >= t
                    ? (i.classList.remove(o), i.classList.add(s))
                    : e < n &&
                      i.classList.contains(s) &&
                      e >= t &&
                      (i.classList.remove(s), i.classList.add(o)),
                  void (n = e));
            }, 250);
          window.addEventListener("scroll", a);
        }
      }),
      (t.setupToggles = function () {
        e("[data-expander]:not([data-expander-loaded])").each(function (i) {
          function o() {
            if (
              (b.off("click touchstart keyup", s),
              b.off("click touchstart keyup", n),
              l.hasClass("active"))
            )
              r.is("[data-expander-tabs]") ||
                (r.add(d).removeClass("active"),
                g === !0 && w.removeClass("active"),
                h &&
                  (b.removeClass("js-data-toggled"),
                  e("html").removeClass("js-data-toggled-" + l.attr("id"))),
                u ? _.hide() : k.hide());
            else {
              if (
                (r.add(d).addClass("active"),
                g === !0 && w.addClass("active"),
                h &&
                  (b.addClass("js-data-toggled"),
                  e("html").addClass("js-data-toggled-" + l.attr("id"))),
                r.is("[data-expander-tabs]"))
              ) {
                var t = e("[data-expander-tabs]").not(r);
                t.each(function () {
                  var t,
                    i = e(this);
                  (t =
                    i.data("expander").length > 0
                      ? e("#" + i.data("expander")).not(l)
                      : i.find("[data-expander-target]").not(l)),
                    i
                      .not(d)
                      .removeClass("active")
                      .attr("aria-expanded", "false"),
                    u ? _.hide(t) : k.hide(t);
                });
              }
              u ? _.show() : k.show(), r.attr("aria-expanded", "true");
              var i = function () {
                var e = l
                  .find(
                    "input:visible, select:visible, textarea:visible, a:visible, button:visible"
                  )
                  .first();
                m !== !0 && (e.length > 0 ? e.focus() : l.focus());
              };
              (window.dataExpTimeOut = setTimeout(i, p)),
                f || b.on("click keyup", s);
            }
          }
          function s(e) {
            27 === e.which ? (r.focus(), a()) : n(e);
          }
          function n(t) {
            var i = e(t.target);
            i.closest(l).length <= 0 && i.closest("#" + c).length <= 0 && a();
          }
          function a() {
            o(), (window.dataExpTimeOut = null);
          }
          var r,
            l,
            d,
            c,
            p,
            u,
            h,
            f,
            m,
            v,
            g,
            y,
            w = e(this),
            b = e("html");
          w.data("expander").length > 0
            ? ((r = w),
              (d = e("[data-expander='" + w.data("expander") + "']").not(this)),
              (l = e("#" + w.data("expander"))))
            : ((r = w.find("[data-expander-toggle]").first()),
              (l = w.find("[data-expander-target]").first()),
              (g = !0)),
            (c = w.attr("id")),
            (p = w.data("expander-time") || 300),
            (u = w.is("[data-expander-css]")),
            (h = w.is("[data-expander-overlay]")),
            (f = w.is("[data-expander-hold]")),
            (m = w.is("[data-expander-nofocus]")),
            (v = w.hasClass("active"));
          var k = {
              hide: function (e) {
                (e = e || l),
                  e.slideUp(p, function () {
                    e.removeClass("active"),
                      r.add(d).attr("aria-expanded", "false");
                  });
              },
              show: function (e) {
                (e = e || l),
                  e.slideDown(p, function () {
                    e.addClass("active");
                  });
              },
            },
            _ = {
              hide: function (e) {
                (e = e || l),
                  e.removeClass("target-show"),
                  e.addClass("target-hide"),
                  setTimeout(function () {
                    e.removeClass("active"),
                      e.removeClass("target-hide"),
                      r.add(d).attr("aria-expanded", "false");
                  }, p);
              },
              show: function (e) {
                (e = e || l),
                  e.addClass("active"),
                  e.addClass("target-show"),
                  setTimeout(function () {
                    r.attr("aria-expanded", "true");
                  }, p);
              },
            };
          if (l.length > 0) {
            (window.dataExpTimeOut = null),
              c ||
                (r.first().attr("id", "data-expander-" + i),
                (c = r.attr("id"))),
              l.attr({ "aria-labelledby": c }),
              r.is("button")
                ? r
                    .attr({
                      role: "button",
                      "aria-expanded": v ? "true" : "false",
                    })
                    .on("click", function (e) {
                      t.a11yClick(e) === !0 && (e.preventDefault(), o());
                    })
                : r
                    .attr({
                      role: "button",
                      "aria-expanded": v ? "true" : "false",
                    })
                    .on("click keypress", function (e) {
                      t.a11yClick(e) === !0 && (e.preventDefault(), o());
                    }),
              !f && v && b.on("click keyup", n),
              l.attr("data-expander-target", "");
            var S = t.debounce(function () {
              y ||
                (r.add(d).is(":visible") || l.is(":hidden")
                  ? l.attr("tabindex", "0")
                  : l.removeAttr("tabindex"));
            }, 250);
            e(window).on("load resize", S), w.attr("data-expander-loaded", "");
          }
        });
      }),
      (t.debounce = function (e, t, i) {
        var o;
        return function () {
          var s = this,
            n = arguments,
            a = function () {
              (o = null), i || e.apply(s, n);
            },
            r = i && !o;
          clearTimeout(o), (o = setTimeout(a, t)), r && e.apply(s, n);
        };
      }),
      (t.getViewportW =
        window.getViewportW ||
        function () {
          var e = "undefined" != typeof window && window,
            t = "undefined" != typeof document && document,
            i = t && t.documentElement,
            o = i.clientWidth,
            s = e.innerWidth;
          return o < s ? s : o;
        }),
      (t.a11yClick = function (e) {
        if ("click" === e.type || "touchstart" === e.type) return !0;
        if ("keypress" !== e.type) return !1;
        var t = e.charCode || e.keyCode;
        return 32 === t && e.preventDefault(), 32 === t || 13 === t || void 0;
      }),
      (t.setupScrollPointerBlocker = function () {
        var e,
          i = document.body,
          o = document.createElement("div");
        o.setAttribute("class", "scroll-cover"),
          window.addEventListener(
            "scroll",
            function () {
              clearTimeout(e),
                i.appendChild(o),
                (e = setTimeout(function () {
                  i.removeChild(o);
                }, t.speeds.fast));
            },
            !1
          );
      }),
      (t.setupUserBinds = function () {
        var t = e("body"),
          i = e("html");
        i.hasClass("js-user-bind-init") ||
          (i.addClass("js-user-bind-init"),
          t.on("keyup", function () {
            i.hasClass("js-keyboard-user") ||
              i.removeClass("js-click-user").addClass("js-keyboard-user");
          }),
          t.on("click", function () {
            i.hasClass("js-click-user") ||
              i.removeClass("js-keyboard-user").addClass("js-click-user");
          }));
      });
  })(jQuery, (window.talonUtil = window.talonUtil || {})),
  (function (e, t) {
    e(".carousel-container").each(function () {
      var t = this.querySelector(".carousel-slider-btn--prev"),
        i = this.querySelector(".carousel-slider-btn--next");
      e(".carousel").slick({
        prevArrow: t,
        nextArrow: i,
        slidesToScroll: 1,
        slidesToShow: 4,
        accessibility: !0,
        variableWidth: !1,
        initialSlide: 0,
        centerMode: !1,
        centerPadding: 200,
        customPaging: 0,
        infinite: !0,
      }),
        e(".carousel").on("beforeChange", function () {
          e(this).css("width", "100%");
        });
    }),
      e(".book-carousel-container").each(function () {
        var t = this.querySelector(".book-carousel-slider-btn--prev"),
          i = this.querySelector(".book-carousel-slider-btn--next"),
          o = e(".book-carousel");
        o.slick({
          prevArrow: t,
          nextArrow: i,
          slidesToScroll: 1.5,
          slidesToShow: 1.5,
          accessibility: !0,
          variableWidth: !1,
          initialSlide: 0,
          centerMode: !0,
          centerPadding: 200,
          customPaging: 0,
          infinite: !1,
          dots: !1,
          mobileFirst: !0,
          responsive: [
            {
              breakpoint: 1500,
              settings: { slidesToShow: 4, centerMode: !1, slidesToScroll: 1 },
            },
            {
              breakpoint: 1300,
              settings: { slidesToShow: 3, centerMode: !1, slidesToScroll: 1 },
            },
            {
              breakpoint: 1024,
              settings: { slidesToShow: 2, centerMode: !1, slidesToScroll: 1 },
            },
          ],
        }),
          o.on("beforeChange", function () {
            lazyLoader.revalidate();
          });
      }),
      e(".awards-slider-container-wrapper").each(function () {
        var t = this.querySelector(".awards-slider__btn--prev"),
          i = this.querySelector(".awards-slider__btn--next"),
          o = this.querySelector(".awards-slider__dots"),
          s = e(".awards-slider");
        s.slick({
          prevArrow: t,
          nextArrow: i,
          focusOnChange: !0,
          accessibility: !0,
          variableWidth: !1,
          infinite: !1,
          dots: !0,
          appendDots: o,
          mobileFirst: !0,
          arrows: !1,
          slidesToScroll: 1,
          slidesToShow: 1.2,
          responsive: [
            {
              breakpoint: 960,
              settings: {
                dots: !1,
                arrows: !0,
                slidesToShow: 2,
                centerMode: !1,
              },
            },
            {
              breakpoint: 1280,
              settings: {
                dots: !1,
                arrows: !0,
                slidesToShow: 3,
                centerMode: !1,
              },
            },
            {
              breakpoint: 1440,
              settings: {
                dots: !1,
                arrows: !0,
                slidesToShow: 5,
                centerMode: !1,
              },
            },
          ],
        }),
          s.on("beforeChange", function () {
            lazyLoader.revalidate();
          });
      }),
      e(".related-resources-widget__list-container").each(function () {
        var t = document.querySelector(
            ".related-resources-widget__list"
          ).childElementCount,
          i = e(".related-resources-widget__list");
        i.slick({
          prevArrow: !1,
          nextArrow: !1,
          slidesToScroll: 1,
          slidesToShow: 4,
          accessibility: !0,
          variableWidth: !1,
          initialSlide: 0,
          centerMode: !1,
          centerPadding: 0,
          infinite: !1,
          dots: t > 4,
          responsive: [
            { breakpoint: 1300, settings: { slidesToShow: 3, dots: t > 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2, dots: t > 2 } },
            { breakpoint: 700, settings: { slidesToShow: 1, dots: t > 1 } },
          ],
        }),
          i.on("beforeChange", function () {
            lazyLoader.revalidate();
          });
      }),
      e(".side-by-side-slider-container").each(function () {
        var t = e(".side-by-side-slider");
        t.slick({
          prevArrow: !1,
          nextArrow: !1,
          slidesToScroll: 1,
          slidesToShow: 1,
          accessibility: !0,
          variableWidth: !1,
          initialSlide: 0,
          centerMode: !1,
          centerPadding: 0,
          infinite: !1,
          dots: !0,
        }),
          t.on("beforeChange", function () {
            lazyLoader.revalidate();
          });
      }),
      e(".resources-listing-slider__container-wrapper").each(function () {
        var t = this.querySelector(".resources-listing-slider__btn--prev"),
          i = this.querySelector(".resources-listing-slider__btn--next"),
          o = this.querySelector(".resources-listing-slider__dots"),
          s = e(".resources-listing-slider__slider");
        s.slick({
          prevArrow: t,
          nextArrow: i,
          focusOnChange: !0,
          accessibility: !0,
          variableWidth: !1,
          infinite: !1,
          dots: !0,
          appendDots: o,
          mobileFirst: !0,
          arrows: !1,
          slidesToScroll: 1,
          slidesToShow: 1.2,
          responsive: [
            {
              breakpoint: 960,
              settings: {
                dots: !1,
                arrows: !0,
                slidesToShow: 2.3,
                centerMode: !1,
              },
            },
            {
              breakpoint: 1300,
              settings: { slidesToShow: 3.3, dots: !1, arrows: !0 },
            },
          ],
        }),
          s.on("beforeChange", function () {
            lazyLoader.revalidate();
          });
      }),
      e(".book-listing-carousel__container-wrapper").each(function () {
        var t = this.querySelector(".book-listing-carousel__btn--prev"),
          i = this.querySelector(".book-listing-carousel__btn--next"),
          o = this.querySelector(".book-listing-carousel__dots"),
          s = e(".book-listing-carousel__slider");
        s.slick({
          prevArrow: t,
          nextArrow: i,
          focusOnChange: !0,
          accessibility: !0,
          variableWidth: !1,
          infinite: !1,
          dots: !0,
          appendDots: o,
          mobileFirst: !0,
          arrows: !1,
          slidesToScroll: 1,
          slidesToShow: 1.2,
          responsive: [
            {
              breakpoint: 960,
              settings: {
                dots: !1,
                arrows: !0,
                slidesToShow: 2,
                centerMode: !1,
              },
            },
            {
              breakpoint: 1280,
              settings: {
                dots: !1,
                arrows: !0,
                slidesToShow: 3,
                centerMode: !1,
              },
            },
          ],
        }),
          s.on("beforeChange", function () {
            lazyLoader.revalidate();
          });
      }),
      e(".slick-initialized").each(function () {
        var t = e(this).find(".slick-dots");
        t.children().length <= 1 && t.remove();
      }),
      e(".js-pagination-inner").each(function () {
        var t = e(this);
        t.jPages({
          containerID: "paginated-listing",
          perPage: 8,
          previous: "button.js-pagination__previous",
          next: "button.js-pagination__next",
          minHeight: !1,
          callback: function (e, i) {
            e.count <= 1 && t.closest(".js-pagination").hide();
          },
        });
      }),
      e("#js-print").on("click", function () {
        window.print();
      }),
      e(".list-tool.expand-list, .list-tool.accordion-list").each(function () {
        var t = e(this);
        t.find(".item:first-child > a").addClass("active"),
          t.find(".item .item-content").hide(),
          t.find(".item:first-child .item-content").show();
      }),
      e(".talon-tabs").each(function () {
        var t = e(this);
        t.find(".talon-tab:first-child > a").addClass("active"),
          t.find(".talon-tab-pane").hide(),
          t.find(".talon-tab-pane:first-child").show();
      }),
      e("a[target=_blank], a[target=new]").each(function () {
        e(this)
          .attr("rel", "noopener noreferrer")
          .append(
            "<span class='visually-hidden'>(Opens in a new window)</span>"
          );
      }),
      e("#cookie-consent-form").submit(function (t) {
        t.preventDefault();
        var i = e(this),
          o = i.attr("action");
        e.ajax({
          type: "POST",
          url: o,
          data: i.serialize(),
          success: function (t) {
            e(".cookie-consent").fadeOut();
          },
        });
      }),
      e(document).on("click", '[data-toggle="modal"]', function (t) {
        var i = "#" + e(this).attr("data-target");
        e(this).modaal({
          content_source: i,
          start_open: !0,
          overlay_opacity: 0.9,
        }),
          t.preventDefault();
      }),
      e(".video-modal").modaal({ type: "video", overlay_opacity: 0.9 });
    var i = function () {
      e(window).resize(function () {
        e(".section-container--flyout").each(function () {
          var t = e(this).outerHeight(),
            i = { paddingBottom: t / 2 + 30, marginBottom: -t / 2 },
            o = { paddingTop: t / 2 + 30, marginTop: -t / 2 };
          e(this).prev().css(i), e(this).next().css(o);
        });
      }),
        e(window).trigger("resize");
    };
    i();
    var o = function () {
      e(document).ready(function () {
        e(".section-container").each(function () {
          e(this).prepend(
            '<div role="presentation" class="section-container__helper"></div>'
          );
        }),
          e("div[class*=section-container--border-radius-top").each(
            function () {
              var t = e(this).children(".section-container__helper");
              if (1 !== e(this).prev(".section-container--flyout").length) {
                var i = e(this).prev().css("background-color");
                t.css("background-color", i);
              } else {
                var o = e(this).prev().prev().css("background-color");
                t.css("background-color", o);
              }
            }
          ),
          e("div[class*=section-container--border-radius-bottom").each(
            function () {
              var t = e(this).children(".section-container__helper");
              if (1 !== e(this).next(".section-container--flyout").length) {
                var i = e(this).next().css("background-color");
                t.css("background-color", i);
              } else {
                var o = e(this).next().next().css("background-color");
                t.css("background-color", o);
              }
            }
          );
      });
    };
    o(),
      t.vendorPlugins(),
      t.setupToggles(),
      t.setupScrollPointerBlocker(),
      t.setupUserBinds();
  })(jQuery, window.talonUtil),
  $(".main-navigation-back").click(function () {
    var e = $(this);
    e.parents("[data-expander]")
      .eq(0)
      .children("[data-expander-toggle]")
      .click();
  }),
  $(".video-iframe-modal").modaal({ type: "iframe", width: 1024, height: 580 }),
  $(".custom-select").each(function () {
    var e = $(this),
      t = e.find("select"),
      i = $('<button class="custom-select__toggle"></button>').html(
        t.find("option:selected").html()
      );
    e.append(i);
    var o = $('<div class="custom-select__items custom-select__hide"></div>');
    t.find("option").each(function () {
      var e = $('<button class="custom-select__item"></button>').html(
        $(this).html()
      );
      e.on("click", function (e) {
        var o = $(this),
          s = o.siblings(".active"),
          n = o.index();
        t.prop("selectedIndex", n),
          i.html(o.html()).focus(),
          s.removeClass("active"),
          o.addClass("active"),
          t.trigger("change"),
          "" === t.val()
            ? t.parent().removeClass("filled")
            : t.parent().addClass("filled");
      }),
        o.append(e);
    }),
      e.append(o),
      "" !== t.val() && t.parent().addClass("filled"),
      i.on("click", function (e) {
        e.stopPropagation(),
          $(".custom-select__toggle")
            .not(this)
            .removeClass("select-arrow-active"),
          $(".custom-select__items")
            .not($(this).next())
            .addClass("custom-select__hide"),
          $(this).toggleClass("select-arrow-active"),
          $(this).next().toggleClass("custom-select__hide"),
          $(this).attr(
            "aria-expanded",
            "true" == $(this).attr("aria-expanded") ? "false" : "true"
          );
      }),
      i.on("blur", function (e) {
        $(this).attr("aria-expanded", "false");
      });
  }),
  $(document).on("click", function () {
    $(".select-arrow-active").removeClass("select-arrow-active"),
      $(".custom-select__items").addClass("custom-select__hide");
  });
var inputLabels = function () {
  $(window).on("load", function () {
    $(".form-control:-webkit-autofill").each(function () {
      var e = $(this);
      e.parents(".form-group").addClass("filled");
    }),
      $(".form-control")
        .on("focus", function () {
          $(this).parents(".form-group").addClass("filled focused");
        })
        .on("blur", function () {
          $(this).parents(".form-group").removeClass("focused");
          var e = $(this);
          "" == e.val() && e.parents(".form-group").removeClass("filled");
        }),
      $(".form-control").each(function () {
        var e = $(this);
        "" != e.val() && e.parents(".form-group").addClass("filled");
      });
  });
};
inputLabels();
var animateNumbers = function (e) {
  e.find(".animate-number").each(function () {
    var e = $(this),
      t = extractNumber(e.text()),
      i = e.text().split(t)[0],
      o = e.text().split(t)[1];
    e.text(i + "0" + o),
      $({ countNum: 0 }).animate(
        { countNum: t },
        {
          duration: 1500,
          easing: "linear",
          step: function () {
            e.text(i + Math.floor(this.countNum) + o);
          },
          complete: function () {
            e.text(i + t + o);
          },
        }
      );
  });
};
if (
  ($(window).on("scroll", function () {
    $(".animate-number-wrapper:not(.has-been-scrolled)").each(function () {
      var e = $(this).offset().top,
        t = $(this).outerHeight(),
        i = $(window).scrollTop(),
        o = $(window).height();
      i > e - o + t &&
        i < e &&
        !$(this).hasClass("has-been-scrolled") &&
        (animateNumbers($(this)), $(this).addClass("has-been-scrolled"));
    });
  }),
  $(window).width() > 960)
) {
  var headerHeight = $(".site-header").innerHeight();
  $(".site-main").css("paddingTop", headerHeight);
} else $(".site-main").css("paddingTop", 0);
var stickyHeader = function () {
  var e = $(".site-header").height();
  $(window).width() > 960
    ? $(window).scrollTop() > e
      ? $(".site-header").addClass("scrolled")
      : $(".site-header").removeClass("scrolled")
    : $(".site-main").css("paddingTop", 0);
};
$(window).on("scroll", function () {
  stickyHeader();
}),
  $(window).on("resize", function () {
    if ((stickyHeader(), $(window).width() > 960)) {
      var e = $(".site-header").innerHeight();
      $(".site-main").css("paddingTop", e);
    }
  });
var timelineElements = [].concat(
    _toConsumableArray(document.querySelectorAll(".timeline-listing1__item"))
  ),
  timelineDots = [].concat(
    _toConsumableArray(document.querySelectorAll(".timeline-listing1__bullet"))
  );
0 !== timelineElements.length &&
  startObserver(timelineElements, "active-timeline", 0.2),
  0 !== timelineDots.length && startObserver(timelineDots, "active-dot", 0.5),
  animateVerticalLine();
var timelineTabButtons = [].concat(
    _toConsumableArray(document.querySelectorAll(".timeline-btns__button"))
  ),
  timelineContainer = document.querySelector(".timeline-box");
0 !== timelineTabButtons.length &&
  timelineTabButtons.forEach(function (e) {
    e.addEventListener("click", function (t) {
      var i = null,
        o = timelineTabButtons.indexOf(e) + 1;
      o !== timelineTabButtons.length &&
        (i = timelineTabButtons[o].getAttribute("data-value"));
      var s = { newValue: i };
      updateNextBtn(s), animateVerticalLine();
    });
  });
var timelineNextButton = document.querySelector(".timeline-next-btn");
timelineNextButton &&
  timelineNextButton.addEventListener("click", function (e) {
    var t = timelineNextButton.value,
      i = t.match(/(\d+)/),
      o = document.querySelector('[data-value="t-' + i[0] + '"]'),
      s = document.querySelector(".timeline-buttons");
    backToTop(s), o.click();
  }),
  (function () {
    window.addEventListener("resize", animateVerticalLine);
  })(),
  setupPlayVideo(),
  (function (e) {
    window.initCalendar = function (t) {
      function i(e) {
        var t = e.toLocaleString("en-us", { month: "long", year: "numeric" });
        s.textContent = t;
      }
      var o = document.getElementById("js-calendar"),
        s = document.getElementById("js-calendar-date"),
        n = document.getElementById("js-calendar-prev"),
        a = document.getElementById("js-calendar-next"),
        r = new FullCalendar.Calendar(o, {
          plugins: ["dayGrid"],
          contentHeight: "auto",
          eventLimit: !1,
          header: !1,
          events: t,
          eventRender: function (e) {
            var t = e.event,
              i = t.title,
              o = t.extendedProps.location,
              s = t.extendedProps.extra;
            e.el.innerHTML =
              "\n                " +
              (i ? '<div class="event-title">' + i + "</div>" : "") +
              "\n                " +
              (s ? '<div class="event-extra">' + s + "</div>" : "") +
              "\n                " +
              (o
                ? '<div class="event-location">\n                        <svg aria-hidden="true" focusable="false">\n                            <use xlink:href="/assets/dist/images/svg-legend.svg#icon-location" />\n                        </svg>\n                        ' +
                  o +
                  "\n                    </div>"
                : "") +
              "\n            ";
          },
          datesRender: function (t) {
            i(r.getDate()), e(".fc-day-grid-event").matchHeight();
          },
        });
      n.addEventListener("click", function (e) {
        return r.prev();
      }),
        a.addEventListener("click", function (e) {
          return r.next();
        }),
        (o.innerHTML = ""),
        r.render();
    };
  })(jQuery),
  (function (e) {
    e.fn.applyFiltering = function (t) {
      var i = e.extend(
          {
            currentPageUrl: "",
            targetContainerSelector: "#target-list",
            buildQueryString: !0,
            url: "",
          },
          t
        ),
        o = function (t) {
          if (i.targetContainerSelector) {
            var o = new DOMParser().parseFromString(t, "text/html"),
              s = o.querySelector(i.targetContainerSelector);
            e(i.targetContainerSelector).html(s);
          } else
            console.log(
              "ERROR: Missing configuration for target container in view"
            );
        },
        s = function (t) {
          var i = e(t).closest("form");
          return {
            url: i.attr("action"),
            method: i.attr("method"),
            data: i.serialize(),
          };
        },
        n = function (t) {
          var i = e(t).closest("form"),
            o = new FormData(),
            s = !0,
            n = !1,
            a = void 0;
          try {
            for (
              var r, l = new FormData(i[0]).entries()[Symbol.iterator]();
              !(s = (r = l.next()).done);
              s = !0
            ) {
              var d = r.value;
              d[1] && o.set(d[0].replace("Filter.", ""), d[1]);
            }
          } catch (c) {
            (n = !0), (a = c);
          } finally {
            try {
              !s && l["return"] && l["return"]();
            } finally {
              if (n) throw a;
            }
          }
          return new URLSearchParams(o).toString().toLowerCase();
        },
        a = function () {
          if ("True" == i.buildQueryString) {
            var t = n(this);
            window.location.href = i.currentPageUrl + "?" + t;
          } else {
            var a = s(this);
            e.ajax({ method: a.method, url: a.url, data: a.data, success: o });
          }
        };
      return this.click(a);
    };
  })(jQuery),
  (function (e) {
    var t = {
      pagingSelector: ".filterForm [data-target]",
      paginationTargetAttribute: "target",
      paginationTargetInputSelector: "#Pagination_TargetPage",
      searchButtonSelector: ".filterForm #btnSubmit",
      clearButtonSelector: ".filterForm #btnClear",
    };
    e.init = function (e) {
      (e = $.extend({}, t, e || {})),
        $(e.pagingSelector).click(function (t) {
          var i = $(this).data(),
            o = $(this).closest("form");
          t.preventDefault(),
            i &&
              i[e.paginationTargetAttribute] &&
              o &&
              ($(e.paginationTargetInputSelector).val(
                i[e.paginationTargetAttribute]
              ),
              $(o).submit());
        }),
        $(e.searchButtonSelector).click(function (t) {
          var i = $(this).closest("form");
          t.preventDefault(),
            i &&
              ($(i).find(e.paginationTargetInputSelector).val("1"),
              $(i).submit());
        }),
        $(e.clearButtonSelector).click(function (t) {
          var i = $(this).closest("form");
          t.preventDefault(),
            i &&
              ($(i)
                .find("select, input:not([type=button], [type=submit])")
                .val(""),
              $(i).find(e.paginationTargetInputSelector).val("1"),
              $(i).submit());
        });
    };
  })((window.SmartSearch = window.SmartSearch || {})),
  (function (e) {
    var t = function (e) {
      if (!e) throw "Options not found";
      if (!e.id) throw "Id has not been initialized";
      if (!e.aClassName) throw "aClassName has not been initialized";
      if (!e.targetPageId) throw "TargetPageId has not been initialized";
      return !0;
    };
    e.InitPagination = function (e) {
      t(e);
      var i = e.id,
        o = e.aClassName,
        s = e.targetPageId;
      $("a." + o).click(function (e) {
        var t = $(this).data();
        e.preventDefault(),
          t && t.target && $("input#" + s).val(t.target),
          $("form#" + i).submit();
      });
    };
  })((window.Search = window.Search || {}));
