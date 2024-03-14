(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"class":"Player","shadow":false,"gap":10,"definitions": [{"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"class":"PanoramaPlayer","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_363F96BA_3C2B_ED1E_41C9_B3FA9468CFB7","hoverFactor":0,"id":"panorama_377AA2DC_3C2B_E51A_419A_64B1E7CB3750_camera"},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_377AA2DC_3C2B_E51A_419A_64B1E7CB3750_camera","media":"this.panorama_377AA2DC_3C2B_E51A_419A_64B1E7CB3750","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"playbackBarHeadShadowOpacity":0.7,"class":"ViewerArea","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"subtitlesVerticalAlign":"bottom","toolTipBorderRadius":3,"width":"100%","toolTipShadowOpacity":1,"playbackBarHeadShadowVerticalLength":0,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"id":"MainViewer","paddingLeft":0,"data":{"name":"Main Viewer"},"paddingRight":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBackgroundColorDirection":"vertical","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBorderColor":"#000000","playbackBarOpacity":1,"toolTipTextShadowColor":"#000000","progressRight":0,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","transitionMode":"blending","playbackBarHeadShadow":true,"progressOpacity":1,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesTop":0,"translationTransitionDuration":1000,"progressBackgroundColorDirection":"vertical","playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesFontWeight":"normal","subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesFontSize":"3vmin","toolTipShadowVerticalLength":0,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColorDirection":"vertical","displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"progressBorderColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"progressBarOpacity":1,"minHeight":50,"progressBottom":0,"subtitlesHorizontalAlign":"center","borderSize":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesTextDecoration":"none","toolTipPaddingRight":6,"minWidth":100,"subtitlesPaddingBottom":5,"toolTipShadowSpread":0,"subtitlesBorderColor":"#FFFFFF","progressHeight":10,"toolTipFontStyle":"normal","playbackBarProgressBorderRadius":0,"playbackBarBackgroundOpacity":1,"progressBarBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"toolTipTextShadowBlurRadius":3,"paddingTop":0,"playbackBarHeadOpacity":1,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipTextShadowOpacity":0,"subtitlesTextShadowBlurRadius":0,"paddingBottom":0,"propagateClick":false,"playbackBarLeft":0,"toolTipPaddingBottom":4,"progressBorderRadius":0,"subtitlesOpacity":1,"progressBarBorderSize":0,"progressBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","surfaceReticleColor":"#FFFFFF","firstTransitionDuration":0,"vrPointerSelectionTime":2000,"subtitlesBorderSize":0,"vrPointerSelectionColor":"#FF6600","subtitlesBottom":50,"progressLeft":0,"toolTipShadowColor":"#333333","surfaceReticleSelectionColor":"#FFFFFF","subtitlesPaddingRight":5,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadowHorizontalLength":0,"surfaceReticleOpacity":0.6,"subtitlesShadow":false,"toolTipPaddingTop":4,"toolTipBorderSize":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"height":"100%","toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":5,"subtitlesEnabled":true,"shadow":false,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6},{"thumbnailUrl":"media/panorama_377AA2DC_3C2B_E51A_419A_64B1E7CB3750_t.jpg","id":"panorama_377AA2DC_3C2B_E51A_419A_64B1E7CB3750","hfovMax":130,"class":"Panorama","hfov":360,"hfovMin":"150%","label":trans('panorama_377AA2DC_3C2B_E51A_419A_64B1E7CB3750.label'),"frames":[{"cube":{"levels":[{"width":9216,"rowCount":3,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","url":"media/panorama_377AA2DC_3C2B_E51A_419A_64B1E7CB3750_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_377AA2DC_3C2B_E51A_419A_64B1E7CB3750_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_377AA2DC_3C2B_E51A_419A_64B1E7CB3750_0/{face}/2/{row}_{column}.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_377AA2DC_3C2B_E51A_419A_64B1E7CB3750_t.jpg"}],"partial":false,"pitch":0,"data":{"label":"MAH_GYM"},"vfov":180},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_363F96BA_3C2B_ED1E_41C9_B3FA9468CFB7"}],"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":0.75,"width":"100%","paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","paddingLeft":0,"paddingBottom":0,"propagateClick":false,"data":{"name":"Player600","defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}},"paddingRight":0,"defaultVRPointer":"laser","desktopMipmappingEnabled":false,"overflow":"hidden","scrollBarMargin":2,"verticalAlign":"top","mobileMipmappingEnabled":false,"children":["this.MainViewer"],"contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","height":"100%","backgroundColor":["#FFFFFF"],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","scripts":{"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showWindow":TDV.Tour.Script.showWindow,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getKey":TDV.Tour.Script.getKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizStart":TDV.Tour.Script.quizStart,"existsKey":TDV.Tour.Script.existsKey,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"openLink":TDV.Tour.Script.openLink,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizFinish":TDV.Tour.Script.quizFinish,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"historyGoBack":TDV.Tour.Script.historyGoBack,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"clone":TDV.Tour.Script.clone,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"init":TDV.Tour.Script.init,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupImage":TDV.Tour.Script.showPopupImage,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaByName":TDV.Tour.Script.getMediaByName,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMainViewer":TDV.Tour.Script.getMainViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"downloadFile":TDV.Tour.Script.downloadFile,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"initQuiz":TDV.Tour.Script.initQuiz,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"resumePlayers":TDV.Tour.Script.resumePlayers,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMapLocation":TDV.Tour.Script.setMapLocation,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPixels":TDV.Tour.Script.getPixels,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setLocale":TDV.Tour.Script.setLocale,"getOverlays":TDV.Tour.Script.getOverlays,"setValue":TDV.Tour.Script.setValue,"getComponentByName":TDV.Tour.Script.getComponentByName,"registerKey":TDV.Tour.Script.registerKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"unregisterKey":TDV.Tour.Script.unregisterKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"mixObject":TDV.Tour.Script.mixObject,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"playAudioList":TDV.Tour.Script.playAudioList,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"translate":TDV.Tour.Script.translate},"start":"this.init()","minHeight":20,"borderSize":0,"downloadEnabled":false,"minWidth":20,"backgroundColorDirection":"vertical"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Mar 14 2024