<?php

?>

<form action="<?php echo get_admin_url() . 'admin.php?page=dm-general-settings&tab=content&action=save_data'; ?>" method="post">

    <?php wp_nonce_field("dm_save_data", "dm_save_data", true); ?>

    <table class="form-table" role="presentation">

        <tbody>
        <tr>
            <th scope="row"><label for="category"><?php echo __('Category'); ?> <span class="detail-info">?<span class="tooltip"><a href="https://www.dailymotion.com/dmrss#MRSSImporterSpecifications-DailymotionCategories">https://www.dailymotion.com/dmrss#MRSSImporterSpecifications-DailymotionCategories</a></span></span></label></th>
            <td>
                <select name="category" type="text" id="category" class="regular-text">
                    <option value="" <?php echo (empty($options['category'])) ? 'selected' : ''; ?>>--</option>
                    <option value="animals" <?php echo ($options['category'] === 'animals') ? 'selected' : ''; ?>>
                        Animals
                    </option>
                    <option value="creation" <?php echo ($options['category'] === 'creation') ? 'selected' : ''; ?>>
                        creation
                    </option>
                    <option value="auto" <?php echo ($options['category'] === 'auto') ? 'selected' : ''; ?>>auto
                    </option>
                    <option value="school" <?php echo ($options['category'] === 'school') ? 'selected' : ''; ?>>school
                    </option>
                    <option value="people" <?php echo ($options['category'] === 'people') ? 'selected' : ''; ?>>people
                    </option>
                    <option value="fun" <?php echo ($options['category'] === 'fun') ? 'selected' : ''; ?>>fun</option>
                    <option value="videogames" <?php echo ($options['category'] === 'videogames') ? 'selected' : ''; ?>>
                        videogames
                    </option>
                    <option value="tech" <?php echo ($options['category'] === 'tech') ? 'selected' : ''; ?>>tech
                    </option>
                    <option value="latino" <?php echo ($options['category'] === 'latino') ? 'selected' : ''; ?>>latino
                    </option>
                    <option value="lifestyle" <?php echo ($options['category'] === 'lifestyle') ? 'selected' : ''; ?>>
                        lifestyle
                    </option>
                    <option value="shortfilms" <?php echo ($options['category'] === 'shortfilms') ? 'selected' : ''; ?>>
                        shortfilms
                    </option>
                    <option value="music" <?php echo ($options['category'] === 'music') ? 'selected' : ''; ?>>music
                    </option>
                    <option value="news" <?php echo ($options['category'] === 'animals') ? 'selected' : ''; ?>>news
                    </option>
                    <option value="redband" <?php echo ($options['category'] === 'redband') ? 'selected' : ''; ?>>
                        redband
                    </option>
                    <option value="sport" <?php echo ($options['category'] === 'sport') ? 'selected' : ''; ?>>sport
                    </option>
                    <option value="tv" <?php echo ($options['category'] === 'tv') ? 'selected' : ''; ?>>tv</option>
                    <option value="travel" <?php echo ($options['category'] === 'travel') ? 'selected' : ''; ?>>travel
                    </option>
                    <option value="webcam" <?php echo ($options['category'] === 'webcam') ? 'selected' : ''; ?>>webcam
                    </option>
                </select>
            </td>
        </tr>

        <tr>
            <th scope="row"><label for="exclude-ids"><?php echo __('Exclude Ids'); ?> <span class="detail-info">?<span class="tooltip">use this field if you need to exclude one or several specific video xid from recommendations. Separate several values by a ","</span></span></label></th>
            <td>
                <input name="exclude_ids" type="text" id="exclude-ids" class="regular-text"
                       value="<?php echo ($options['exclude_ids']) ? $options['exclude_ids'] : '' ?>">
            </td>
        </tr>

        <tr>
            <th scope="row"><label for="playlist"><?php echo __('Seach in Playlist'); ?> <span class="detail-info">?<span class="tooltip">the script will only look for content within the specified playlist xid</span></span></label></th>
            <td>
                <input name="playlist" type="text" id="playlist" class="regular-text"
                       value="<?php echo ($options['playlist']) ? $options['playlist'] : '' ?>">
            </td>
        </tr>

        <tr>
            <th scope="row"><label for="playlist-id"><?php echo __('Playlist ID'); ?> <span class="detail-info">?<span class="tooltip">Embed a manual or dynamic playlist. The video playing first will be defined according to the sorting criterion you chose upon creating the playlist in the partner HQ (newest, oldest or most viewed)</span></span></label></th>
            <td>
                <input name="playlist_id" type="text" id="playlist-id" class="regular-text"
                       value="<?php echo ($options['playlist_id']) ? $options['playlist_id'] : '' ?>">
            </td>
        </tr>


        <tr>
            <th scope="row"><label for="syndication"><?php echo __('Syndication ID'); ?> <span class="detail-info">?<span
                                class="tooltip">Six digits syndication key</span></span></label></th>
            <td>
                <input name="syndication" type="text" id="syndication" class="regular-text"
                       value="<?php echo (!empty($options['syndication'])) ? $options['syndication'] : ''; ?>">
                <p class="description" id="syndication">Optional</p>
            </td>
        </tr>

<!--        <tr>-->
<!--            <th scope="row">--><?php //echo __('Disable Queue'); ?><!-- <span class="detail-info">?<span class="tooltip">toggle this to hide the playlist on the right side of the player upon mouse-over</span></span></th>-->
<!--            <td>-->
<!--                <fieldset>-->
<!--                    <legend class="screen-reader-text"><span>--><?php //echo __('Disable Queue'); ?><!--</span></legend>-->
<!--                    <label for="disable-queue">-->
<!--                        <input name="disable_queue" type="checkbox" id="disable-queue"-->
<!--                               value="1" --><?php //echo ($options['disable_queue'] ==    1) ? 'checked' : '' ?><!--
<!--                    </label>-->
<!--                </fieldset>-->
<!--            </td>-->
<!--        </tr>-->
<!---->
<!--        <tr>-->
<!--            <th scope="row">--><?php //echo __('Disable Auto Next'); ?><!-- <span class="detail-info">?<span class="tooltip">toggle this to automatically sta playback of the next video in the queue</span></span></th>-->
<!--            <td>-->
<!--                <fieldset>-->
<!--                    <legend class="screen-reader-text"><span>--><?php //echo __('Disable Auto Next'); ?><!--</span></legend>-->
<!--                    <label for="disable-auto-next">-->
<!--                        <input name="disable_auto_next" type="checkbox" id="disable-auto-next"-->
<!--                               value="1" --><?php //echo ($options['disable_auto_next'] == 1) ? 'checked' : '' ?><!--
<!--                    </label>-->
<!--                </fieldset>-->
<!--            </td>-->
<!--        </tr>-->

        <tr>
            <th scope="row"><label for="language"><?php echo __('Language'); ?> <span class="detail-info">?<span class="tooltip">Specify if you want the content ecommendaiton to pick a video in the set language. This is based on ISO-3166 alpha-2 codes <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2</a></span></span></label></th>
            <td>
                <input name="language" type="text" id="language" class="regular-text"
                       value="<?php echo (!empty($options['language'])) ? $options['language'] : ''; ?>">
            </td>
        </tr>

        <tr>
            <th scope="row"><label for="keywords-selector"><?php echo __('Keywords Selector'); ?>  <span class="detail-info">?<span class="tooltip">Define which meta tag you will use for the contextual embed. If you leave it blank it will get the <code>h1</code> the words in the meta tag will be chunked, sanitized, and matched against your own video catalog or the video catalog of the 3rd parties you include in your script.</span></span></label></th>
            <td>
                <select name="keywords_selector" type="text" id="keywords-selector" class="regular-text">
                    <option value="" <?php echo (empty($options['keywords_selector'])) ? 'selected' : ''; ?>>--</option>
                    <option value="meta[name='keywords']" <?php echo ($options['keywords_selector'] === "meta[name='keywords']") ? 'selected' : ''; ?>>
                        meta[name='keywords']
                    </option>
                    <option value="h1" <?php echo ($options['keywords_selector'] === "h1") ? 'selected' : ''; ?>>h1
                    </option>
                    <option value="title" <?php echo ($options['keywords_selector'] === "title") ? 'selected' : ''; ?>>
                        title
                    </option>
                    <option value="meta[name='news_keywords']" <?php echo ($options['keywords_selector'] === "meta[name='news_keywords']") ? 'selected' : ''; ?>>
                        meta[name='news_keywords']
                    </option>
                </select>
            </td>
        </tr>

        <tr>
            <th scope="row"><label for="range-day"><?php echo __('Range Day'); ?> <span class="detail-info">?<span class="tooltip">This lets you pick the number of days, from today's date, till which the script will look and fetch recommended videos. Example: putting 6 would mean the script will fetch the most relevant/popular/recent video from past 6 days</span></span></label></th>
            <td>
                <input name="range_day" type="number" id="range-day" class="regular-text"
                       value="<?php echo ($options['range_day']) ? $options['range_day'] : ''; ?>">
            </td>
        </tr>

<!--        <tr>-->
<!--            <th scope="row"><label for="video-id">--><?php //echo __('Video Id'); ?><!-- <span class="detail-info">?<span class="tooltip">Input any video xid to recommend a video in particular.</span></span></label></th>-->
<!--            <td>-->
<!--                <input name="video_id" type="text" id="video-id" class="regular-text"-->
<!--                       value="--><?php //echo ($options['video_id']) ? $options['video_id'] : '' ?><!--">-->
<!--            </td>-->
<!--        </tr>-->

        </tbody>

    </table>

    <p class="submit">
        <input type="submit" name="submit" id="submit" class="button button-primary" value="Save">
    </p>
</form>
