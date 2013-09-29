<?php

$b = $build->build;
$c = $build->build->champion;

global $libChampion;
global $libRune;
global $libMastery;

?>

<table>
    <tr>
        <td>
            <div style="float:left" data-champion-code="<?php echo $c->code; ?>" class="champions-icon champions-<?php echo $c->code; ?>"></div>
        </td>
        <td>
            <h3><?php echo $libChampion[$c->code]["longName"]; ?></h3>
        </td>
    </tr>
</table>

<h3>Abilities:</h3>
<table>
    <?php

    foreach ($c->abilities as $ability) {
        echo '<tr>';
        echo '<td><div style="float:left" data-champion-code="' . $ability->code . '" class="champions-icon champions-' .
            \LeaguePress\WordPressPlugin::toCssCode(
                $c->code . '-' . $ability->code
            ) . '"></div></td>';
        echo "<td>" . $libChampion[$c->code]["abilities"][$ability->code]["shortName"] . "</td>";
        for ($i = 1; $i < 19; $i++) {
            $show = array_search($i, $ability->levels) !== false ? $i : "";
            echo "<td>$show</td>";
        }
        echo '</tr>';
    }

    ?>
</table>
<h3>Summoner Spells:</h3>
<table>
    <tr>
        <td>
            <?php

            foreach ($build->build->summonerspells as $s) {
                echo '<div style="margin-right:20px" data-summonerspell-index="0" data-summonerspell-code="'
                    . \LeaguePress\WordPressPlugin::toCssCode($s) . '" class="summonerspells-icon summonerspells-'
                    . \LeaguePress\WordPressPlugin::toCssCode($s) . '"></div>';
            }

            ?>
        </td>
    </tr>
</table>
<h3>Runes:</h3>

<table>
    <?php

    foreach ($build->build->runes as $type) {
        foreach ($type as $r) {
            echo '<tr>';
            echo "<td>" . $r->amount . "x</td>";
            echo '<td><div data-rune-code="' . $r->code . '" class="runes-icon runeicons-'
                . \LeaguePress\WordPressPlugin::toCssCode($libRune[$r->code]["iconCode"]) . '"></div></td>';
            echo "<td>" . $libRune[$r->code]["shortName"] . "</td>";
            echo '</tr>';
        }
    }

    ?>
</table>

<h3>Items:</h3>


<?php

foreach ($build->build->items as $itemsets) {
    echo "<h5>{$itemsets->title}</h5>";
    echo '<ul style="display:table; width:600px;">';
    foreach ($itemsets->items as $item) {
        echo '<li style="float: left;"><div data-item-code="' . $item->code . '" data-item-index="'
            . $index . '" class="items-icon items-' . \LeaguePress\WordPressPlugin::toCssCode($item->code) . '"></div></li>';
    }
    echo '</ul>';
}

?>

<h3>Masteries:</h3>

<?php

echo '<ul style="display:table; width:600px; list-style-type:none; padding:0; margin:0;">';
foreach ($build->build->masteries as $mastery) {
    echo '<li style="float:left; width:300px; height:48px;">' .
        '<div style="position: relative; display: inline-block; float: left;" data-mastery-code="' . $mastery->code . '" title="' .
        $libMastery[$mastery->code]["shortName"] . '" class="masteries-icon masteries-' .
        \LeaguePress\WordPressPlugin::toCssCode($mastery->code) .
        '"></div><div style="position: relative; display: inline-block; float: left; margin-left: 10px; font-size: 0.8em;">'
        . '(' . $mastery->rank . '/' . $libMastery[$mastery->code]["maxRank"] . ') ' . $libMastery[$mastery->code]["shortName"]
        . ' [' . $libMastery[$mastery->code]["treeName"] . ']</div></li>';
}
echo '</ul>';

?>
<br/><br/><br/>