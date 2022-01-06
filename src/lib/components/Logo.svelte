<script lang="ts">
    export let shouldIncludeTitle: boolean = false;
    $: heightPx = shouldIncludeTitle ? 500 : 300;
</script>

<svg viewBox="0 0 500 {heightPx}" id="svg_null">
    <g id="root" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="background" fill="#FFF" x="0" y="0" width="500" height={heightPx} />
        {#if shouldIncludeTitle}
            <g id="Group" transform="translate(40.000000, 309.000000)">
                <rect id="Rectangle-82" x="0" y="0" width="420" height="45" />
                <text
                    id="headerText"
                    font-family="Cousine"
                    font-size="40"
                    font-weight="700"
                    line-spacing="40"
                    letter-spacing="4"
                    fill="#000"
                    data-text-alignment="C"
                    font-style="normal"
                >
                    <tspan x="29.96875" y="37">Máskénthallók</tspan>
                </text>
            </g>
            <g id="Group-2" transform="translate(40.000000, 362.000000)">
                <rect id="Rectangle" x="0" y="0" width="420" height="32" />
                <text
                    id="captionText"
                    font-family="Cousine"
                    font-size="24.133596695995692"
                    font-weight="400"
                    letter-spacing="1.9306877356796552"
                    fill="#000"
                    data-text-alignment="C"
                    font-style="normal"
                >
                    <tspan x="5.796875" y="22.5">Történeti Kutatócsoportja</tspan>
                </text>
            </g>
        {/if}
        <g id="shape" transform="translate(149.000000, 109.000000)">
            <polygon
                id="shape.secondary"
                fill-opacity=".02"
                fill="#5cc2f2"
                points="85.089 99.343 85.089 79.769 94.916 89.557"
            />
            <polygon
                id="shape.secondary"
                fill-opacity=".6"
                fill="#5cc2f2"
                points="116.912 168 85.658 168 85.658 115.861 116.912 84.736"
            />
            <polygon
                id="shape.secondary"
                fill-opacity=".8"
                fill="#5cc2f2"
                points="159.455 168 128.201 168 128.201 80.341 159.455 49.217"
            />
            <polygon id="shape.secondary" fill="#5cc2f2" points="202 168 170.746 168 170.746 31.123 202 0" />
            <polygon
                id="shape.secondary"
                fill-opacity=".4"
                fill="#5cc2f2"
                points="74.367 127.105 74.367 168 33.301 168"
            />
            <polygon id="shape.secondary" fill-opacity=".5" fill="#5cc2f2" points="130.037 0 101 28.917 71.963 0" />
            <polygon id="shape.primary" fill-opacity=".5" fill="#191ba9" points="130.037 0 101 28.917 71.963 0" />
            <polygon
                id="shape.primary"
                fill-opacity=".8"
                fill="#191ba9"
                points="42.545 140.47 42.545 43.008 73.799 74.132 73.799 109.346"
            />
            <polygon
                id="shape.primary"
                fill-opacity=".6"
                fill="#191ba9"
                points="85.089 99.343 85.089 79.769 94.916 89.557"
            />
            <polygon id="shape.primary" fill="#191ba9" points="21.134 168 0 168 0 0 31.254 31.123 31.254 157.923" />
            <polygon
                id="shape.primary"
                fill-opacity=".6"
                fill="#191ba9"
                points="74.367 127.105 74.367 168 33.301 168"
            />
        </g>
    </g>
</svg>

<style>
    svg {
        width: 300px;
    }
</style>
