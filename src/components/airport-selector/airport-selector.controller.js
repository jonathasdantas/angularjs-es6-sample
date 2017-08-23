/**
 * Airport Selector Componente Controller
 * 
 * @class AirportSelector
 */
class AirportSelector {
  constructor($filter) {
    'ngInject';
    this.filter = $filter('objectFilter');
  }

  $onInit() {
    this.fields = {
      name: true,
      iataCode: true
    };

    this.search = undefined;
    this.iata = undefined;
  }

  /**
   * Check if there is just one Airport to suggest
   * 
   * @memberof AirportSelector
   */
  checkAutocomplete() {
    if (this.airports) {
      this.filteredAirports = this.filter(this.airports, this.search, this.fields);

      let keys = Object.keys(this.filteredAirports);

      if (keys.length == 1 && this.search) {
        this.autocomplete = this.filteredAirports[keys[0]];
        this.aita = this.autocomplete.aitaCode;
      } else {
        if (this.hasSuggestions() && this.search) {
          this.emmitEvent('');
        }

        this.autocomplete = undefined;
      }
    }
  }

  /**
   * Helper Method to check if there is any suggestion
   * 
   * @returns 
   * @memberof AirportSelector
   */
  hasSuggestions() {
    return this.filteredAirports && Object.keys(this.filteredAirports).length > 1;
  }

  /**
   * Keeps one-way data flow uptodate after a externa change
   * 
   * @memberof AirportSelector
   */
  $onChanges(changes) {
    if (!changes.airports || !changes.airports.currentValue) {
      this.search = undefined;
    } else {
      this.airports = changes.airports.currentValue;
    }
    
    if (changes.placeholder && changes.placeholder.currentValue) {
      this.placeholder = changes.placeholder.currentValue;
    }

    if (changes.airport && changes.airport.currentValue) {
      this.setAirport(changes.airport.currentValue.name, changes.airport.currentValue.iataCode, true);
    }
  }

  /**
   * Emmit an event to the registered callback
   * 
   * @memberof AirportSelector
   */
  onUpdateContent() {
    this.checkAutocomplete();

    if (!this.search) {
      this.emmitEvent('');
    }
  }

  /**
   * OnBlur event Callback
   * 
   * @memberof AirportSelector
   */
  onBlur() {
    this.setAutocompleteToAirport();
  }

  /**
   * OnKeyUp event Callback similar to OnBlur callback
   * 
   * @param {any} $event 
   * @memberof AirportSelector
   */
  onKeyUp($event) {
    if ($event.key === 'ArrowRight') {
      this.setAutocompleteToAirport();
    }
  }

  /**
   * Check autocomplete variable and set to the current selected Airport
   * 
   * @memberof AirportSelector
   */
  setAutocompleteToAirport() {
    if (this.autocomplete) {
      this.setAirport(this.autocomplete.name, this.autocomplete.iataCode);
    }
  }

  /**
   * Set the current selected Airport
   * 
   * @param {any} name 
   * @param {any} iata 
   * @param {boolean} [fromUrl=false] 
   * @memberof AirportSelector
   */
  setAirport(name, iata, fromUrl = false) {
    if ((this.search || fromUrl) && name && iata) {
      this.search = this.getAirportName(name, iata);
      this.iata = iata;

      this.emmitEvent(iata);
      this.checkAutocomplete();
    }
  }

/**
 * Emits Event to provide external behaviour
 * 
 * @param {any} airport 
 * @memberof AirportSelector
 */
  emmitEvent(airport) {
    this.onUpdate({
      $event: {
        airport: airport
      }
    });
  }

/**
 * Airport name method formatter
 * 
 * @param {any} name 
 * @param {any} iata 
 * @returns 
 * @memberof AirportSelector
 */
  getAirportName(name, iata) {
    return `${name} (${iata})`;
  }
}

export default AirportSelector;