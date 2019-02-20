<?php



namespace Planck\Navigation;


use Planck\Exception\DoesNotExist;

class Container
{

    /**
     * @var Item[]
     */
    protected $items = [];


    public function __construct()
    {
    }


    public function loadByDescriptor($descriptor)
    {
        foreach ($descriptor as $itemName => $itemDescriptor) {


            $item = new Item();
            if($item->loadByDescriptor($itemDescriptor)) {
                $this->items[$itemName] = $item;
            }

        }
    }

    /**
     * @param $itemName
     * @return NavigationItem
     * @throws DoesNotExist
     */
    public function getItemByName($itemName)
    {
        if(!array_key_exists($itemName, $this->items)) {
            throw new DoesNotExist('No navigation item registered with name '.$itemName);
        }
        return $this->items[$itemName];
    }

    /**
     * @return Item[]
     */
    public function getItems()
    {
        return $this->items;
    }


}

